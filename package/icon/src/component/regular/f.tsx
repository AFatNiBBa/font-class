
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=regular f}
 * @preview ![f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRDMzIwIDgxLjY4OCAzMDUuNjcyIDk2IDI4OCA5Nkg2NFYyMjRIMjIyLjg1OUMyNDAuNTMxIDIyNCAyNTQuODU5IDIzOC4zMTIgMjU0Ljg1OSAyNTZTMjQwLjUzMSAyODggMjIyLjg1OSAyODhINjRWNDQ4QzY0IDQ2NS42ODggNDkuNjcyIDQ4MCAzMiA0ODBTMCA0NjUuNjg4IDAgNDQ4VjY0QzAgNDYuMzEyIDE0LjMyOCAzMiAzMiAzMkgyODhDMzA1LjY3MiAzMiAzMjAgNDYuMzEyIDMyMCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function F(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 64C320 81.688 305.672 96 288 96H64V224H222.859C240.531 224 254.859 238.312 254.859 256S240.531 288 222.859 288H64V448C64 465.688 49.672 480 32 480S0 465.688 0 448V64C0 46.312 14.328 32 32 32H288C305.672 32 320 46.312 320 64Z" />
        </Icon>
    </>
}