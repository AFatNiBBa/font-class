
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=regular circle-e}
 * @preview ![circle-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjggMTc2QzM0MS4yNSAxNzYgMzUyIDE2NS4yNSAzNTIgMTUyUzM0MS4yNSAxMjggMzI4IDEyOEgxODRDMTcwLjc1IDEyOCAxNjAgMTM4Ljc1IDE2MCAxNTJWMzYwQzE2MCAzNzMuMjUgMTcwLjc1IDM4NCAxODQgMzg0SDMyOEMzNDEuMjUgMzg0IDM1MiAzNzMuMjUgMzUyIDM2MFMzNDEuMjUgMzM2IDMyOCAzMzZIMjA4VjI4MEgyOTZDMzA5LjI1IDI4MCAzMjAgMjY5LjI1IDMyMCAyNTZTMzA5LjI1IDIzMiAyOTYgMjMySDIwOFYxNzZIMzI4Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M328 176C341.25 176 352 165.25 352 152S341.25 128 328 128H184C170.75 128 160 138.75 160 152V360C160 373.25 170.75 384 184 384H328C341.25 384 352 373.25 352 360S341.25 336 328 336H208V280H296C309.25 280 320 269.25 320 256S309.25 232 296 232H208V176H328ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}