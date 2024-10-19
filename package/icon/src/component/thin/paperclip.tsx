
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=thin paperclip}
 * @preview ![paperclip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTA0VjM2OEMzMzYgNDQ3LjQwNiAyNzEuNDA2IDUxMiAxOTIgNTEyUzQ4IDQ0Ny40MDYgNDggMzY4VjIwMEM0OCAxOTUuNTgyIDUxLjU4MiAxOTIgNTYgMTkyUzY0IDE5NS41ODIgNjQgMjAwVjM2OEM2NCA0MzguNTc4IDEyMS40MjIgNDk2IDE5MiA0OTZTMzIwIDQzOC41NzggMzIwIDM2OFYxMDRDMzIwIDU1LjQ2OSAyODAuNTMxIDE2IDIzMiAxNlMxNDQgNTUuNDY5IDE0NCAxMDRWMzIwQzE0NCAzNDYuNDY5IDE2NS41MzEgMzY4IDE5MiAzNjhTMjQwIDM0Ni40NjkgMjQwIDMyMFYxMzZDMjQwIDEzMS41ODIgMjQzLjU4MiAxMjggMjQ4IDEyOFMyNTYgMTMxLjU4MiAyNTYgMTM2VjMyMEMyNTYgMzU1LjI5NyAyMjcuMjk3IDM4NCAxOTIgMzg0UzEyOCAzNTUuMjk3IDEyOCAzMjBWMTA0QzEyOCA0Ni42NTYgMTc0LjY1NiAwIDIzMiAwUzMzNiA0Ni42NTYgMzM2IDEwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Paperclip: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 104V368C336 447.406 271.406 512 192 512S48 447.406 48 368V200C48 195.582 51.582 192 56 192S64 195.582 64 200V368C64 438.578 121.422 496 192 496S320 438.578 320 368V104C320 55.469 280.531 16 232 16S144 55.469 144 104V320C144 346.469 165.531 368 192 368S240 346.469 240 320V136C240 131.582 243.582 128 248 128S256 131.582 256 136V320C256 355.297 227.297 384 192 384S128 355.297 128 320V104C128 46.656 174.656 0 232 0S336 46.656 336 104Z" />
    </Icon>
);

export default Paperclip;