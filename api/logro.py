class Logro:
    def __init__(self, logro_id, jugador_id, progreso, descripcion):
        self.logro_id = logro_id
        self.jugador_id = jugador_id
        self.progreso = progreso
        self.descripcion = descripcion

    def to_dict(self):
        return {
            'id': self.logro_id,
            'jugador_id': self.jugador_id,
            'progreso': self.progreso,
            'descripcion': self.descripcion
        }