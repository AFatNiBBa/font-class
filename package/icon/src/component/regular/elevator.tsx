
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `elevator` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=regular elevator}
 * @preview ![elevator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjU0IDAgMTkyVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDQ4QzQ4My4zNDggNTEyIDUxMiA0ODMuMzQ2IDUxMiA0NDhWMTkyQzUxMiAxNTYuNjU0IDQ4My4zNDggMTI4IDQ0OCAxMjhaTTQ2NCA0NDhDNDY0IDQ1Ni44MjIgNDU2LjgyMiA0NjQgNDQ4IDQ2NEg0MzJWNDAwQzQzMiAzNzMuNDkgNDEwLjUxIDM1MiAzODQgMzUySDMyMEMyOTMuNDkgMzUyIDI3MiAzNzMuNDkgMjcyIDQwMFY0NjRIMjQwVjQwMEMyNDAgMzczLjQ5IDIxOC41MSAzNTIgMTkyIDM1MkgxMjhDMTAxLjQ5IDM1MiA4MCAzNzMuNDkgODAgNDAwVjQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjIgNDggNDQ4VjE5MkM0OCAxODMuMTc4IDU1LjE3OCAxNzYgNjQgMTc2SDQ0OEM0NTYuODIyIDE3NiA0NjQgMTgzLjE3OCA0NjQgMTkyVjQ0OFpNMTYwIDIyNEMxMzMuNDc1IDIyNC4xIDExMiAyNDUuNTQzIDExMiAyNzJDMTEyIDI5OC40NTUgMTMzLjQ3NSAzMTkuOSAxNjAgMzIwQzE4Ni41MjUgMzE5LjkgMjA4IDI5OC40NTUgMjA4IDI3MkMyMDggMjQ1LjU0MyAxODYuNTI1IDIyNC4xIDE2MCAyMjRaTTM1MiAyMjRDMzI1LjQ3NSAyMjQuMSAzMDQgMjQ1LjU0MyAzMDQgMjcyQzMwNCAyOTguNDU1IDMyNS40NzUgMzE5LjkgMzUyIDMyMEMzNzguNTI1IDMxOS45IDQwMCAyOTguNDU1IDQwMCAyNzJDNDAwIDI0NS41NDMgMzc4LjUyNSAyMjQuMSAzNTIgMjI0Wk03OSA5NkgyMDlDMjE0Ljk2NyA5NiAyMjAuMzY3IDkyLjU5OCAyMjIuNzUgODcuMzM4QzIyNS4xMzUgODIuMDc2IDIyNC4wNDkgNzUuOTUxIDIxOS45OTYgNzEuNzUyTDE1NC45OTYgNC40MUMxNDkuMzEyIC0xLjQ3MSAxMzguNjg3IC0xLjQ3MSAxMzMuMDA0IDQuNDFMNjguMDA0IDcxLjc1MkM2My45NTEgNzUuOTUxIDYyLjg2NyA4Mi4wNzYgNjUuMjQ4IDg3LjMzOEM2Ny42MzMgOTIuNTk4IDczLjAzMyA5NiA3OSA5NlpNMzU3LjAxMiA5MS41OUMzNjIuNjk3IDk3LjQ3MSAzNzMuMzIgOTcuNDcxIDM3OS4wMDQgOTEuNTlMNDQ0LjAwNiAyNC4yNDhDNDQ4LjA1OSAyMC4wNDkgNDQ5LjE0MyAxMy45MjQgNDQ2Ljc2IDguNjYyQzQ0NC4zNzUgMy40MDIgNDM4Ljk3NyAwIDQzMy4wMDggMEgzMDMuMDA4QzI5Ny4wNDEgMCAyOTEuNjQxIDMuNDAyIDI4OS4yNiA4LjY2MkMyODYuODc1IDEzLjkyNCAyODcuOTU5IDIwLjA0OSAyOTIuMDEyIDI0LjI0OEwzNTcuMDEyIDkxLjU5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Elevator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V192C512 156.654 483.348 128 448 128ZM464 448C464 456.822 456.822 464 448 464H432V400C432 373.49 410.51 352 384 352H320C293.49 352 272 373.49 272 400V464H240V400C240 373.49 218.51 352 192 352H128C101.49 352 80 373.49 80 400V464H64C55.178 464 48 456.822 48 448V192C48 183.178 55.178 176 64 176H448C456.822 176 464 183.178 464 192V448ZM160 224C133.475 224.1 112 245.543 112 272C112 298.455 133.475 319.9 160 320C186.525 319.9 208 298.455 208 272C208 245.543 186.525 224.1 160 224ZM352 224C325.475 224.1 304 245.543 304 272C304 298.455 325.475 319.9 352 320C378.525 319.9 400 298.455 400 272C400 245.543 378.525 224.1 352 224ZM79 96H209C214.967 96 220.367 92.598 222.75 87.338C225.135 82.076 224.049 75.951 219.996 71.752L154.996 4.41C149.312 -1.471 138.687 -1.471 133.004 4.41L68.004 71.752C63.951 75.951 62.867 82.076 65.248 87.338C67.633 92.598 73.033 96 79 96ZM357.012 91.59C362.697 97.471 373.32 97.471 379.004 91.59L444.006 24.248C448.059 20.049 449.143 13.924 446.76 8.662C444.375 3.402 438.977 0 433.008 0H303.008C297.041 0 291.641 3.402 289.26 8.662C286.875 13.924 287.959 20.049 292.012 24.248L357.012 91.59Z" />
        </Icon>
    </>
}