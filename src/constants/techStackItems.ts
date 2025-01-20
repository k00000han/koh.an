import fornt_end_icon from "../assets/icons/drop-icon.svg"
import html_css_icon from '../assets/icons/html-css-icon.svg'
import js_icon from '../assets/icons/js-icon.svg'
import ts_icon from '../assets/icons/ts-icon.svg'
import react_icon from '../assets/icons/react-icon.svg'
import sass_icon from '../assets/icons/sass-icon.svg'

import back_end_icon from "../assets/icons/server-icon.svg"
import python_icon from "../assets/icons/python-icon.svg"
import fastapi_icon from "../assets/icons/fastapi-icon.svg"
import django_icon from "../assets/icons/django-icon.svg"
import postgres_icon from "../assets/icons/postgres-icon.svg"
import docker_icon from "../assets/icons/docker-icon.svg"


export interface techStackItems {
  name: string;
  name_icon: string;
}

export interface techStack {
  title: string;
  title_icon: string;
  items: techStackItems[];
}

export const frontEndItems: techStack = {
  title: "Front End",
  title_icon: fornt_end_icon,
  items: [
    {name: "HTML + CSS", name_icon: html_css_icon},
    {name: "JavaScript", name_icon: js_icon},
    {name: "TypeScript", name_icon: ts_icon},
    {name: "React", name_icon: react_icon},
    {name: "SASS Preprocessor", name_icon: sass_icon}
  ]
}

export const backEndItems: techStack = {
  title: "Back End",
  title_icon: back_end_icon,
  items: [
    {name: "Python", name_icon: python_icon},
    {name: "FastAPI", name_icon: fastapi_icon},
    {name: "Django", name_icon: django_icon},
    {name: "PostgreSQL", name_icon: postgres_icon},
    {name: "Docker", name_icon: docker_icon}
  ]
}