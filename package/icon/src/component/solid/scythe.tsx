
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=solid scythe}
 * @preview ![scythe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDkuODM2IDBIMzM4Ljg1MkMxOTEuOTg2IDAgNjMuOTk2IDY0IDAgMTkySDUwOS45NjNMNTQ5LjgzNiAwWk02MzIuNTggMTEuNjI1QzYyNi41OCA0LjI1IDYxNy40NTUgMCA2MDcuOTU3IDBINTgyLjQ1OUw1MjIuNzEzIDI4OEg0MTUuOTcxQzM5OC4yOTkgMjg4IDM4My45NzMgMzAyLjMyNiAzODMuOTczIDMyMFMzOTguMjk5IDM1MiA0MTUuOTcxIDM1Mkg1MDkuNDYzTDQ4MC4yMTUgNDkzQzQ3OS4zNCA0OTcuNzUgNDgwLjU5IDUwMi41IDQ4My43MTUgNTA2LjI1QzQ4Ni43MTUgNTA5Ljg3NSA0OTEuMjE1IDUxMiA0OTUuOTY1IDUxMkg1MjcuNDYzQzUzNS4wODYgNTEyIDU0MS43MTEgNTA2LjUgNTQzLjA4NiA0OTlMNjM5LjQ1MyAzOEM2NDEuMjAzIDI4LjYyNSA2MzguNzAzIDE5IDYzMi41OCAxMS42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Scythe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M549.836 0H338.852C191.986 0 63.996 64 0 192H509.963L549.836 0ZM632.58 11.625C626.58 4.25 617.455 0 607.957 0H582.459L522.713 288H415.971C398.299 288 383.973 302.326 383.973 320S398.299 352 415.971 352H509.463L480.215 493C479.34 497.75 480.59 502.5 483.715 506.25C486.715 509.875 491.215 512 495.965 512H527.463C535.086 512 541.711 506.5 543.086 499L639.453 38C641.203 28.625 638.703 19 632.58 11.625Z" />
        </Icon>
    </>
}