# Node & react Development

Project by :

Théo Besse : Theobse
Alexandre Bernard : AlexandreBernard1 et Tortoule
Jérémy Beugnon : itsj1


Ce projet a besoin d'une base de donnée afin de fonctionner. 

Pour cela, nous utilisons le postgresql afin de gérer la base de donnée.

Dans postgresql, nous avons dans un premier temps créer un LoginRole avec comme nom "LearningDbUser" avec un password "root".
Cet utilisateur a tout les privilèges.

![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/d5d505e1-2119-4dac-8a73-a805ff818005)
![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/4202b5f4-95c7-441a-b59f-329e8f19f034)

La base de donnée "LearningFactDb" a ensuite été créé et l'utilisateur précédent a été definis comme owner.
![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/255da5e7-c74f-4cc5-9d7b-484b96551a97)

Les tables de la base de donnée sont : "LearningPackage" , "course" et "question"

CREATE TABLE IF NOT EXISTS public.question
(
    "QuestionID" integer NOT NULL DEFAULT nextval('"question_QuestionID_seq"'::regclass),
    "CourseID" integer,
    "Question" text COLLATE pg_catalog."default" NOT NULL,
    "Answer" text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT question_pkey PRIMARY KEY ("QuestionID"),
    CONSTRAINT "question_CourseID_fkey" FOREIGN KEY ("CourseID")
        REFERENCES public.course (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.question
    OWNER to "LearningDbUser";


CREATE TABLE IF NOT EXISTS public."LearningPackage"
(
    id integer NOT NULL DEFAULT nextval('"LearningPackage_id_seq"'::regclass),
    "packageName" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "LearningPackage_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."LearningPackage"
    OWNER to "LearningDbUser";

CREATE TABLE IF NOT EXISTS public.course
(
    id integer NOT NULL DEFAULT nextval('course_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    "isAvailable" boolean NOT NULL DEFAULT true,
    learning_package_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT course_pkey PRIMARY KEY (id),
    CONSTRAINT course_learning_package_id_fkey FOREIGN KEY (learning_package_id)
        REFERENCES public."LearningPackage" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.course
    OWNER to "LearningDbUser";

Pour l'insertion de données, il est envisageable d'importer des fichiers CSV fournis avec l'application. 
Par ailleurs, l'application offre la possibilité de créer manuellement toutes les données requises à l'aide de ses fonctionnalités intégrées.


    
