
import { Icon } from "../../index";

/**
 * A component that renders the `npm` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/npm?s=brands npm}
 * @preview ![npm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjg4aC0zMnYtNjRoMzJ2NjR6bTI4OC0xMjh2MTkySDI4OHYzMkgxNjB2LTMySDBWMTYwaDU3NnptLTQxNiAzMkgzMnYxMjhoNjR2LTk2aDMydjk2aDMyVjE5MnptMTYwIDBIMTkydjE2MGg2NHYtMzJoNjRWMTkyem0yMjQgMEgzNTJ2MTI4aDY0di05NmgzMnY5NmgzMnYtOTZoMzJ2OTZoMzJWMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Npm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
    </Icon>
);

export default Npm;