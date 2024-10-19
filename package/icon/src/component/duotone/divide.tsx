
import { Icon, generic } from "../../index";

/**
 * A component that renders the `divide` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=duotone divide}
 * @preview ![divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAxNDRDMjUwLjUzMSAxNDQgMjcyIDEyMi41MzEgMjcyIDk2UzI1MC41MzEgNDggMjI0IDQ4UzE3NiA2OS40NjkgMTc2IDk2UzE5Ny40NjkgMTQ0IDIyNCAxNDRaTTIyNCAzNjhDMTk3LjQ2OSAzNjggMTc2IDM4OS40NjkgMTc2IDQxNlMxOTcuNDY5IDQ2NCAyMjQgNDY0UzI3MiA0NDIuNTMxIDI3MiA0MTZTMjUwLjUzMSAzNjggMjI0IDM2OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzkyIDIxNkg1NkMzMy45MDYgMjE2IDE2IDIzMy45MDYgMTYgMjU2UzMzLjkwNiAyOTYgNTYgMjk2SDM5MkM0MTQuMDk0IDI5NiA0MzIgMjc4LjA5NCA0MzIgMjU2UzQxNC4wOTQgMjE2IDM5MiAyMTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 144C250.531 144 272 122.531 272 96S250.531 48 224 48S176 69.469 176 96S197.469 144 224 144ZM224 368C197.469 368 176 389.469 176 416S197.469 464 224 464S272 442.531 272 416S250.531 368 224 368Z" />
            <path d="M392 216H56C33.906 216 16 233.906 16 256S33.906 296 56 296H392C414.094 296 432 278.094 432 256S414.094 216 392 216Z" />
    </Icon>
);

export default Divide;