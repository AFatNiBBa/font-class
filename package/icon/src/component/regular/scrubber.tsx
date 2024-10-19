
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=regular scrubber}
 * @preview ![scrubber](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDIgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41MzkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFpNMjU2IDE5MkMyMjAuNjc0IDE5MiAxOTIgMjIwLjc1IDE5MiAyNTZTMjIwLjY3NCAzMjAgMjU2IDMyMFMzMjAgMjkxLjI1IDMyMCAyNTZTMjkxLjMyNiAxOTIgMjU2IDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Scrubber(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM256 192C220.674 192 192 220.75 192 256S220.674 320 256 320S320 291.25 320 256S291.326 192 256 192Z" />
        </Icon>
    </>
}