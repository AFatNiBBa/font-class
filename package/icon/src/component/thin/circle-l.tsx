
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-l` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=thin circle-l}
 * @preview ![circle-l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMzY4SDE3NlYxMzZDMTc2IDEzMS41NzggMTcyLjQyMiAxMjggMTY4IDEyOFMxNjAgMTMxLjU3OCAxNjAgMTM2VjM3NkMxNjAgMzgwLjQyMiAxNjMuNTc4IDM4NCAxNjggMzg0SDM0NEMzNDguNDIyIDM4NCAzNTIgMzgwLjQyMiAzNTIgMzc2UzM0OC40MjIgMzY4IDM0NCAzNjhaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ4MEMxMzIuNDg2IDQ4MCAzMiAzNzkuNTE0IDMyIDI1NlMxMzIuNDg2IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NiA0ODAgMjU2UzM3OS41MTQgNDgwIDI1NiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleL(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M344 368H176V136C176 131.578 172.422 128 168 128S160 131.578 160 136V376C160 380.422 163.578 384 168 384H344C348.422 384 352 380.422 352 376S348.422 368 344 368ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}