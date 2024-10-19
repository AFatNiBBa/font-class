
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=duotone book-open-reader}
 * @preview ![book-open-reader](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiA5NkMzNTIgNDMgMzA5IDAgMjU2IDBTMTYwIDQzIDE2MCA5NlMyMDMgMTkyIDI1NiAxOTJTMzUyIDE0OSAzNTIgOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTAgMjE5LjEyNVY0MzEuNjYyQzAgNDQ1LjkxMiAxMS42MjUgNDU3LjkxMiAyNi41IDQ1OC42NjJDNzUuMzE4IDQ2MS4xOCAxODAuMTc4IDQ3MS4zNjcgMjQwIDUxMlYyNDUuMjMyQzE4MS4zNjEgMjA1LjQ5MiA3OS44OTggMTk0Ljg1IDI5Ljc1IDE5MkMxMy41IDE5MS4xMjUgMCAyMDMuNSAwIDIxOS4xMjVaTTQ4Mi4yNSAxOTJDNDMyLjE2IDE5NC44NDggMzMwLjg3NSAyMDUuNDY3IDI3Mi4yMDMgMjQ1LjA5NEMyNzIuMDc0IDI0NS4xODIgMjcyIDI0NS4zMjYgMjcyIDI0NS40ODJWNTExLjkwNkMzMzIuMDQzIDQ3MS41MTggNDM2LjY5NSA0NjEuMTc4IDQ4NS41IDQ1OC42NjJDNTAwLjM3NSA0NTcuOTEyIDUxMiA0NDUuOTEyIDUxMiA0MzEuNjYyVjIxOS4xMjVDNTEyIDIwMy41IDQ5OC41IDE5MS4xMjUgNDgyLjI1IDE5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BookOpenReader(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M352 96C352 43 309 0 256 0S160 43 160 96S203 192 256 192S352 149 352 96Z" />
            <path d="M0 219.125V431.662C0 445.912 11.625 457.912 26.5 458.662C75.318 461.18 180.178 471.367 240 512V245.232C181.361 205.492 79.898 194.85 29.75 192C13.5 191.125 0 203.5 0 219.125ZM482.25 192C432.16 194.848 330.875 205.467 272.203 245.094C272.074 245.182 272 245.326 272 245.482V511.906C332.043 471.518 436.695 461.178 485.5 458.662C500.375 457.912 512 445.912 512 431.662V219.125C512 203.5 498.5 191.125 482.25 192Z" />
        </Icon>
    </>
}