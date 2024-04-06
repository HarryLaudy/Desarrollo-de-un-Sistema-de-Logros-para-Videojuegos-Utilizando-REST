from bottle import Bottle, request, response, HTTPResponse
from logro import Logro
import threading

app = Bottle()

logros = []
lock = threading.Lock()

def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
        return fn(*args, **kwargs)
    return _enable_cors

def logro_exists(logro_id, jugador_id):
    for logro in logros:
        if logro['id'] == logro_id and logro['jugador_id'] == jugador_id:
            return True
    return False


@app.post('/api/logros/crear')
@enable_cors
def crear_logro():
    data = request.json
    logro_id  = data.get('logro_id')
    jugador_id = data.get('jugador_id')
    progreso = data.get('progreso')
    descripcion = data.get('descripcion')

    if not (jugador_id and progreso and descripcion):
        return HTTPResponse(status=400, body="Faltan datos en la solicitud")

    with lock:
        if logro_id in logros:
            return HTTPResponse(status=409, body="El logro ya existe")
        logro = Logro(logro_id, jugador_id, progreso, descripcion)
        logros.append(logro.to_dict())
        print(logros)

    return HTTPResponse(status=201, body="Logro creado correctamente")

@app.post('/api/logros/actualizar')
@enable_cors
def actualizar_logro():
    data = request.json
    jugador_id = data.get('jugador_id')
    logro_id = data.get('logro_id')
    progreso = data.get('progreso')

    if not (logro_id and progreso):
        return HTTPResponse(status=400, body="Faltan datos en la solicitud")

    with lock:
        if logro_exists(logro_id, jugador_id) == False:
            return HTTPResponse(status=404, body="El logro no existe para este jugador")
        for logro in logros:
            if logro['id'] == logro_id and logro['jugador_id'] == jugador_id:
                logro['progreso'] = progreso

    return HTTPResponse(status=200, body="Progreso del logro actualizado correctamente")

@app.get('/api/logros/jugador/<jugador_id>')
@enable_cors
def consultar_logros_jugador(jugador_id):
    logros_jugador = []
    for logro in logros:
        if int(logro['jugador_id']) == int(jugador_id):
            logros_jugador.append(logro)
            
    return {'logros': logros_jugador}

if __name__ == '__main__':
    app.run(host='localhost', port=8080)
