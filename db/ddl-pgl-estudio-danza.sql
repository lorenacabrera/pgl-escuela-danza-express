CREATE TABLE Alumno (
    id_alumno INT NOT NULL AUTO_INCREMENT ,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    contacto VARCHAR(100) NULL,
    mail VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)NOT NULL,
    nivel ENUM('principiante', 'intermedio', 'avanzado') NULL,
    fecha_inscripcion DATE NOT NULL,
    CONSTRAINT pk_alumno PRIMARY KEY (id_alumno),
    CONSTRAINT ak_alumno_mail UNIQUE (mail)
);

CREATE TABLE Profesor (
    id_profesor INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    especializacion VARCHAR(100),
    mail VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL
    CONSTRAINT pk_profesor PRIMARY KEY (id_profesor)
);

CREATE TABLE Clase (
    id_clase INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NULL,
    nivel ENUM('principiante', 'intermedio', 'avanzado') NOT NULL,
    dias_horarios VARCHAR(100) NULL,
    max_estudiantes INT NOT NULL,
    id_profesor INT NOT NULL,
    CONSTRAINT pk_clase PRIMARY KEY (id_clase),
    CONSTRAINT fk_clase_profesor FOREIGN KEY (id_profesor) REFERENCES   Profesor(id_profesor)
);

CREATE TABLE Inscripcion (
    id_alumno INT NOT NULL,
    id_clase INT NOT NULL,
    asistencia VARCHAR(5) NULL,
    fecha_inscripcion DATE NOT NULL,
    CONSTRAINT pk_inscripcion PRIMARY KEY (id_alumno, id_clase), 
    CONSTRAINT fk_inscripcion_alumno FOREIGN KEY (id_alumno) REFERENCES Alumno(id_alumno), 
    CONSTRAINT fk_inscripcion_clase FOREIGN KEY (id_clase) REFERENCES Clase(id_clase)  
);

CREATE TABLE Pago (
    id_pago INT NOT NULL AUTO_INCREMENT,
    id_alumno INT NOT NULL,
    fecha_pago DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    metodo_pago ENUM('tarjeta', 'transferencia', 'efectivo') NOT NULL,
    estado ENUM('pagado', 'pendiente', 'mora') NOT NULL,
    concepto VARCHAR(100) NOT NULL,
    CONSTRAINT pk_pago PRIMARY KEY (id_pago),
    CONSTRAINT chk_pago_monto CHECK (monto > 0), 
    CONSTRAINT fk_pago_alumno FOREIGN KEY (id_alumno) REFERENCES Alumno(id_alumno)
);

CREATE TABLE RedSocial (
    id_redsocial INT NOT NULL AUTO_INCREMENT,
    plataforma VARCHAR(50) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    CONSTRAINT pk_redsocial PRIMARY KEY (id_redsocial)
);

CREATE TABLE Evento (
    id_evento INT NOT NULL AUTO_INCREMENT,
    nombre_evento VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    ubicacion VARCHAR(255) NULL,
    descripcion VARCHAR(255) NULL,
    id_redsocial INT,
    CONSTRAINT pk_evento PRIMARY KEY (id_evento),
    CONSTRAINT fk_evento_redsocial FOREIGN KEY (id_redsocial) REFERENCES     RedSocial(id_redsocial)
);

CREATE TABLE Participacion (
    id_alumno INT NOT NULL,
    id_evento INT NOT NULL,
    CONSTRAINT pk_participacion PRIMARY KEY (id_alumno, id_evento),
    CONSTRAINT fk_participacion_alumno FOREIGN KEY (id_alumno) REFERENCES Alumno(id_alumno),
    CONSTRAINT fk_participacion_evento FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
);

CREATE TABLE Coordinacion (
    id_profesor INT NOT NULL,
    id_evento INT NOT NULL,
    CONSTRAINT pk_coordinacion PRIMARY KEY (id_profesor, id_evento),
    CONSTRAINT fk_coordinacion_profesor FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor),
    CONSTRAINT fk_coordinacion_evento FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
);
