
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flask` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=solid flask}
 * @preview ![flask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzcuMjMyIDQwMy41TDMxOS45OTIgMjE1VjY0SDMyNy45OTFDMzQxLjI0IDY0IDM1MS45ODkgNTMuMjUgMzUxLjk4OSA0MFYyNEMzNTEuOTg5IDEwLjc1IDM0MS4yNCAwIDMyNy45OTEgMEgxMjAuMDA5QzEwNi43NiAwIDk2LjAxMSAxMC43NSA5Ni4wMTEgMjRWNDBDOTYuMDExIDUzLjI1IDEwNi43NiA2NCAxMjAuMDA5IDY0SDEyOC4wMDhWMjE1TDEwLjc2OCA0MDMuNUMtMTguNDc5IDQ1MC42MjUgMTUuMjY4IDUxMiA3MC44ODggNTEySDM3Ny4xMTJDNDMyLjczMiA1MTIgNDY2LjQ3OSA0NTAuNSA0MzcuMjMyIDQwMy41Wk0xMzcuODgyIDMyMEwxODYuMTI4IDI0Mi4zNzVDMTg5Ljc1MyAyMzcuMjUgMTkxLjg3OCAyMzAuNzUgMTkxLjg3OCAyMjRWNjRIMjU1Ljg3MlYyMjRDMjU1Ljg3MiAyMzAuODc1IDI1OC4xMjIgMjM3LjI1IDI2MS43NDcgMjQyLjM3NUwzMDkuODY4IDMyMEgxMzcuODgyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Flask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M437.232 403.5L319.992 215V64H327.991C341.24 64 351.989 53.25 351.989 40V24C351.989 10.75 341.24 0 327.991 0H120.009C106.76 0 96.011 10.75 96.011 24V40C96.011 53.25 106.76 64 120.009 64H128.008V215L10.768 403.5C-18.479 450.625 15.268 512 70.888 512H377.112C432.732 512 466.479 450.5 437.232 403.5ZM137.882 320L186.128 242.375C189.753 237.25 191.878 230.75 191.878 224V64H255.872V224C255.872 230.875 258.122 237.25 261.747 242.375L309.868 320H137.882Z" />
        </Icon>
    </>
}