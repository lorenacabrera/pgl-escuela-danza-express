INSERT INTO Alumno (nombre, apellido, fecha_nacimiento, contacto, mail, telefono, nivel, fecha_inscripcion) VALUES
('Carlos', 'González', '2005-08-15', 'contacto1', 'carlos.gonzalez@mail.com', '1234567890', 'principiante', '2024-01-10'),
('Ana', 'Pérez', '2006-04-22', 'contacto2', 'ana.perez@mail.com', '1234567891', 'intermedio', '2024-01-15'),
('Luis', 'Martínez', '2007-12-10', 'contacto3', 'luis.martinez@mail.com', '1234567892', 'avanzado', '2024-01-20'),
('María', 'López', '2005-06-01', 'contacto4', 'maria.lopez@mail.com', '1234567893', 'principiante', '2024-01-25'),
('Pedro', 'Hernández', '2008-02-17', 'contacto5', 'pedro.hernandez@mail.com', '1234567894', 'intermedio', '2024-02-01'),
('Elena', 'Díaz', '2007-09-03', 'contacto6', 'elena.diaz@mail.com', '1234567895', 'avanzado', '2024-02-05'),
('Jorge', 'Ramírez', '2006-11-29', 'contacto7', 'jorge.ramirez@mail.com', '1234567896', 'principiante', '2024-02-10'),
('Sofía', 'Jiménez', '2009-07-20', 'contacto8', 'sofia.jimenez@mail.com', '1234567897', 'intermedio', '2024-02-15'),
('Miguel', 'Torres', '2005-05-15', 'contacto9', 'miguel.torres@mail.com', '1234567898', 'avanzado', '2024-02-20'),
('Isabel', 'Castro', '2006-03-30', 'contacto10', 'isabel.castro@mail.com', '1234567899', 'principiante', '2024-02-25');

INSERT INTO Profesor (id_profesor, nombre, apellido, especializacion, mail, telefono) VALUES
(1, 'Laura', 'Fernández', 'Matemáticas', 'laura@mail.com', '9876543210'),
(2, 'Andrés', 'García', 'Ciencias', 'andres@mail.com', '9876543211'),
(3, 'Marta', 'Sánchez', 'Lengua', 'marta@mail.com', '9876543212'),
(4, 'Juan', 'Moreno', 'Inglés', 'juan@mail.com', '9876543213'),
(5, 'Lucía', 'Rojas', 'Historia', 'lucia@mail.com', '9876543214'),
(6, 'Diego', 'Vega', 'Geografía', 'diego@mail.com', '9876543215'),
(7, 'Sergio', 'Martín', 'Biología', 'sergio@mail.com', '9876543216'),
(8, 'Carmen', 'Blanco', 'Química', 'carmen@mail.com', '9876543217'),
(9, 'Carlos', 'Pérez', 'Educación Física', 'carlos.p@mail.com', '9876543218'),
(10, 'Inés', 'Dávila', 'Filosofía', 'ines@mail.com', '9876543219');

INSERT INTO Clase (nombre, descripcion, nivel, dias_horarios, max_estudiantes, id_profesor) VALUES
('Ballet Infantil', 'Clase introductoria para niños de 5 a 8 años.', 'principiante', 'Lunes y Miércoles 16:00-17:30', 15, 1),
('Ballet Juvenil', 'Técnicas básicas para jóvenes de 9 a 12 años.', 'principiante', 'Martes y Jueves 16:00-17:30', 20, 2),
('Ballet Clásico Intermedio', 'Entrenamiento clásico para estudiantes con experiencia previa.', 'intermedio', 'Lunes y Miércoles 18:00-19:30', 12, 3),
('Ballet Clásico Avanzado', 'Clase de perfeccionamiento para bailarines avanzados.', 'avanzado', 'Martes y Jueves 18:00-19:30', 10, 4),
('Técnica de Puntas', 'Enfocada en técnica de puntas para estudiantes intermedios y avanzados.', 'intermedio', 'Viernes 17:00-18:30', 8, 5),
('Repertorio Clásico', 'Estudio y práctica de piezas de repertorio clásico.', 'avanzado', 'Sábados 10:00-12:00', 10, 6),
('Ballet Contemporáneo', 'Introducción a estilos contemporáneos en combinación con ballet.', 'intermedio', 'Miércoles y Viernes 16:00-17:30', 15, 3),
('Preparación para Competencias', 'Clase avanzada para preparación de competencias.', 'avanzado', 'Sábados 14:00-16:00', 4, 7),
('Ballet para Adultos', 'Clase para principiantes adultos sin experiencia previa.', 'principiante', 'Martes y Jueves 19:00-20:30', 20, 8),
('Pilates para Bailarines', 'Complemento físico para mejorar fuerza y flexibilidad.', 'intermedio', 'Lunes y Miércoles 17:00-18:00', 15, 9);

INSERT INTO Inscripcion (id_alumno, id_clase, asistencia, fecha_inscripcion) VALUES
(1, 1, '100%', '2024-01-15'),
(2, 2, '90%', '2024-01-18'),
(3, 3, '95%', '2024-01-20'),
(4, 4, '98%', '2024-01-25'),
(5, 5, '80%', '2024-02-01'),
(6, 6, '100%', '2024-02-05'),
(7, 7, '85%', '2024-02-10'),
(8, 8, '92%', '2024-02-12'),
(9, 9, '100%', '2024-02-15'),
(10, 10, '100%', '2024-02-20');

INSERT INTO Pago (id_alumno, fecha_pago, monto, metodo_pago, estado, concepto) VALUES
(1, '2024-01-15', 500.00, 'tarjeta', 'pagado', 'Matrícula primer semestre'),
(2, '2024-01-18', 450.50, 'transferencia', 'pendiente', 'Matrícula primer semestre'),
(3, '2024-01-20', 550.00, 'efectivo', 'pagado', 'Matrícula primer semestre'),
(4, '2024-01-25', 300.75, 'tarjeta', 'mora', 'Clase individual'),
(5, '2024-02-01', 200.00, 'efectivo', 'pagado', 'Clase de técnica de puntas'),
(6, '2024-02-05', 500.00, 'transferencia', 'pendiente', 'Matrícula primer semestre'),
(7, '2024-02-10', 350.00, 'efectivo', 'pagado', 'Taller de repertorio clásico'),
(8, '2024-02-12', 450.00, 'tarjeta', 'pagado', 'Preparación para competencia'),
(9, '2024-02-15', 400.00, 'efectivo', 'mora', 'Clases avanzadas'),
(10, '2024-02-20', 500.00, 'transferencia', 'pagado', 'Matrícula primer semestre');

INSERT INTO RedSocial (plataforma, usuario, descripcion) VALUES
('Instagram', 'ballet_star01', 'Cuenta oficial de un estudiante avanzado en ballet'),
('Facebook', 'BalletArteMexico', 'Página de una academia de ballet en México'),
('Twitter', 'dance_life2024', 'Tweets diarios sobre la vida de un bailarín'),
('Instagram', 'prima_ballerina', 'Fotos y videos de presentaciones en vivo'),
('Facebook', 'ClaseBalletIntermedio', 'Grupo privado para estudiantes de nivel intermedio'),
('Twitter', 'ballet_tips', 'Consejos y técnicas de ballet para todos los niveles'),
('Instagram', 'danza_feliz', 'Historias de éxito en la danza y ballet'),
('Facebook', 'ForoBalletJuvenil', 'Foro para estudiantes y padres sobre eventos y clases'),
('Twitter', 'ballet_news', 'Últimas noticias y eventos sobre ballet mundial'),
('Instagram', 'ballet_daily', 'Publicaciones diarias de inspiración en ballet');

INSERT INTO Evento (nombre_evento, fecha, ubicacion, descripcion, id_redsocial) VALUES
('Festival de Ballet Primavera', '2024-03-15', 'Teatro Municipal', 'Espectáculo anual de ballet con estudiantes avanzados.', 1),
('Gala de Danza Clásica', '2024-04-20', 'Centro Cultural Universitario', 'Presentación de repertorio clásico.', 2),
('Taller de Técnicas de Puntas', '2024-05-10', 'Academia BalletArte', 'Clase magistral para estudiantes intermedios y avanzados.', 3),
('Concurso Nacional de Ballet', '2024-06-01', 'Auditorio Nacional', 'Competencia nacional de jóvenes talentos en ballet.', NULL),
('Exposición de Arte y Ballet', '2024-07-05', 'Galería Danza Moderna', 'Evento combinado de arte visual y danza.', 4),
('Clase Abierta de Ballet', '2024-08-12', 'Plaza Central', 'Clase pública de introducción al ballet.', 5),
('Seminario de Danza Contemporánea', '2024-09-20', 'Escuela de Artes Escénicas', 'Exploración de movimientos contemporáneos en combinación con ballet.', NULL),
('Presentación de Fin de Año', '2024-12-15', 'Teatro Principal', 'Evento para mostrar los avances de los estudiantes.', 6),
('Festival Internacional de Ballet', '2024-11-01', 'Palacio de Bellas Artes', 'Invitados internacionales de renombre.', 7),
('Charlas con Coreógrafos', '2024-10-10', 'Auditorio Cultural', 'Entrevistas y charlas con coreógrafos reconocidos.', 8);



