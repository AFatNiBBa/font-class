
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cat-space` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat-space?s=duotone cat-space}
 * @preview ![cat-space](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjcuMSA2NGMwIDMuMSAxLjcgNi4yIDUuMiA3LjVsMjguOCAxMC43YzIuMiAuOCAzLjkgMi41IDQuNyA0LjdsMTAuNyAyOC44YzIuNiA3IDEyLjQgNyAxNSAwbDEwLjctMjguOGMuOC0yLjIgMi41LTMuOSA0LjctNC43bDI4LjgtMTAuN2M3LTIuNiA3LTEyLjQgMC0xNUwyNDYuOSA0NS44Yy0yLjItLjgtMy45LTIuNS00LjctNC43TDIzMS41IDEyLjNjLTIuNi03LTEyLjQtNy0xNSAwTDIwNS44IDQxLjFjLS44IDIuMi0yLjUgMy45LTQuNyA0LjdMMTcyLjMgNTYuNWMtMy41IDEuMy01LjIgNC40LTUuMiA3LjV6TTI4OCAxNjBjMCAxMS43IDEuMyAyMy4xIDMuNiAzNC4xQzMwNy4zIDI2Ni4xIDM3MS4zIDMyMCA0NDggMzIwYzExIDAgMjEuNy0xLjEgMzItMy4yQzU1MyAzMDIgNjA4IDIzNy40IDYwOCAxNjBDNjA4IDcxLjYgNTM2LjQgMCA0NDggMFMyODggNzEuNiAyODggMTYwek0zNTIgNDIuN2MwLTUuOSA0LjgtMTAuNyAxMC43LTEwLjdjMy40IDAgNi41IDEuNiA4LjUgNC4zbDQwIDUzLjNjMyA0IDcuOCA2LjQgMTIuOCA2LjRsNDggMGM1IDAgOS44LTIuNCAxMi44LTYuNGw0MC01My4zYzItMi43IDUuMi00LjMgOC41LTQuM2M1LjkgMCAxMC43IDQuOCAxMC43IDEwLjdMNTQ0IDE2MGMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTExNy4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDQyLjdjMC01LjkgNC44LTEwLjcgMTAuNy0xMC43YzMuNCAwIDYuNSAxLjYgOC41IDQuM2w0MCA1My4zYzMgNCA3LjggNi40IDEyLjggNi40bDQ4IDBjNSAwIDkuOC0yLjQgMTIuOC02LjRsNDAtNTMuM2MyLTIuNyA1LjItNC4zIDguNS00LjNjNS45IDAgMTAuNyA0LjggMTAuNyAxMC43TDU0NCAxNjBjMCA1My00MyA5Ni05NiA5NnMtOTYtNDMtOTYtOTZsMC0xMTcuM3pNNDE2IDE3NmExNiAxNiAwIDEgMCAwLTMyIDE2IDE2IDAgMSAwIDAgMzJ6bTgwLTE2YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6TTE2MCAyNzcuOGMyOS40LTQ0LjMgNzYuOC03NS42IDEzMS42LTgzLjhDMzA3LjMgMjY2LjEgMzcxLjMgMzIwIDQ0OCAzMjBjMTEgMCAyMS43LTEuMSAzMi0zLjJsMCAzNS4yIDAgMTI4YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtOTMuOUwzMDAgNDQ4bDM2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTE0NCAwYy01MyAwLTk2LTQzLTk2LTk2bDAtMjIzLjVjMC0xNi4xLTEyLTI5LjgtMjgtMzEuOGwtNy45LTFjLTE3LjUtMi4yLTMwLTE4LjItMjcuOC0zNS43czE4LjItMzAgMzUuNy0yNy44bDcuOSAxYzQ4IDYgODQuMSA0Ni44IDg0LjEgOTUuM2wwIDg1LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const CatSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M167.1 64c0 3.1 1.7 6.2 5.2 7.5l28.8 10.7c2.2 .8 3.9 2.5 4.7 4.7l10.7 28.8c2.6 7 12.4 7 15 0l10.7-28.8c.8-2.2 2.5-3.9 4.7-4.7l28.8-10.7c7-2.6 7-12.4 0-15L246.9 45.8c-2.2-.8-3.9-2.5-4.7-4.7L231.5 12.3c-2.6-7-12.4-7-15 0L205.8 41.1c-.8 2.2-2.5 3.9-4.7 4.7L172.3 56.5c-3.5 1.3-5.2 4.4-5.2 7.5zM288 160c0 11.7 1.3 23.1 3.6 34.1C307.3 266.1 371.3 320 448 320c11 0 21.7-1.1 32-3.2C553 302 608 237.4 608 160C608 71.6 536.4 0 448 0S288 71.6 288 160zM352 42.7c0-5.9 4.8-10.7 10.7-10.7c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4l48 0c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3c5.9 0 10.7 4.8 10.7 10.7L544 160c0 53-43 96-96 96s-96-43-96-96l0-117.3z" />
            <path d="M352 42.7c0-5.9 4.8-10.7 10.7-10.7c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4l48 0c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3c5.9 0 10.7 4.8 10.7 10.7L544 160c0 53-43 96-96 96s-96-43-96-96l0-117.3zM416 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM160 277.8c29.4-44.3 76.8-75.6 131.6-83.8C307.3 266.1 371.3 320 448 320c11 0 21.7-1.1 32-3.2l0 35.2 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-93.9L300 448l36 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3z" />
    </Icon>
);

export default CatSpace;