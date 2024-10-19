
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=regular circle-info}
 * @preview ![circle-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0yOTYgMzM2SDI4MFYyNDhDMjgwIDIzNC43NSAyNjkuMjUgMjI0IDI1NiAyMjRIMjI0QzIxMC43NSAyMjQgMjAwIDIzNC43NSAyMDAgMjQ4UzIxMC43NSAyNzIgMjI0IDI3MkgyMzJWMzM2SDIxNkMyMDIuNzUgMzM2IDE5MiAzNDYuNzUgMTkyIDM2MFMyMDIuNzUgMzg0IDIxNiAzODRIMjk2QzMwOS4yNSAzODQgMzIwIDM3My4yNSAzMjAgMzYwUzMwOS4yNSAzMzYgMjk2IDMzNlpNMjU2IDE5MkMyNzMuNjc0IDE5MiAyODggMTc3LjY3MiAyODggMTYwQzI4OCAxNDIuMzI2IDI3My42NzQgMTI4IDI1NiAxMjhTMjI0IDE0Mi4zMjYgMjI0IDE2MEMyMjQgMTc3LjY3MiAyMzguMzI2IDE5MiAyNTYgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleInfo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM296 336H280V248C280 234.75 269.25 224 256 224H224C210.75 224 200 234.75 200 248S210.75 272 224 272H232V336H216C202.75 336 192 346.75 192 360S202.75 384 216 384H296C309.25 384 320 373.25 320 360S309.25 336 296 336ZM256 192C273.674 192 288 177.672 288 160C288 142.326 273.674 128 256 128S224 142.326 224 160C224 177.672 238.326 192 256 192Z" />
        </Icon>
    </>
}