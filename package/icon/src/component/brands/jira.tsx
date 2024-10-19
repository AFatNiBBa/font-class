
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `jira` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/jira?s=brands jira}
 * @preview ![jira](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTAgMjQxLjdDNDE3LjEgMTY5IDMyMC42IDcxLjggMjQ4LjUgMCA4MyAxNjQuOSA2IDI0MS43IDYgMjQxLjdjLTcuOSA3LjktNy45IDIwLjcgMCAyOC43QzEzOC44IDQwMi43IDY3LjggMzMxLjkgMjQ4LjUgNTEyYzM3OS40LTM3OCAxNS43LTE2LjcgMjQxLjUtMjQxLjcgOC03LjkgOC0yMC43IDAtMjguNnptLTI0MS41IDkwbC03Ni03NS43IDc2LTc1LjcgNzYgNzUuNy03NiA3NS43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Jira(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z" />
        </Icon>
    </>
}