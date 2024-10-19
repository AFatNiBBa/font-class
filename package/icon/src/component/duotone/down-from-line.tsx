
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=duotone down-from-line}
 * @preview ![down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAzMkgzMkMxNC4zMjcgMzIgMCA0Ni4zMjcgMCA2NFY2NEMwIDgxLjY3MyAxNC4zMjcgOTYgMzIgOTZIMzUyQzM2OS42NzMgOTYgMzg0IDgxLjY3MyAzODQgNjRWNjRDMzg0IDQ2LjMyNyAzNjkuNjczIDMyIDM1MiAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUwLjA0OCAzMDIuNjkzQzM1My44MyAzMTEuNDk2IDM1Mi4wMzMgMzIxLjcyMyAzNDUuNDU1IDMyOC42OTVMMjA5LjQ1NSA0NzIuNzk5QzIwMC4zOTIgNDgyLjQgMTgzLjYxMSA0ODIuNCAxNzQuNTQ4IDQ3Mi43OTlMMzguNTQ4IDMyOC42OTVDMzEuOTcgMzIxLjcyMyAzMC4xNzMgMzExLjQ5NiAzMy45NTUgMzAyLjY5M0MzNy43NTEgMjkzLjg5MSA0Ni40MjMgMjg4LjE4MiA1Ni4wMDEgMjg4LjE4MkgxMjguMDAxVjE2MC4wOTJDMTI4LjAwMSAxNDIuNDA0IDE0Mi4zMjggMTI4LjA2OCAxNjAuMDAxIDEyOC4wNjhIMjI0LjAwMUMyNDEuNjczIDEyOC4wNjggMjU2LjAwMSAxNDIuNDA0IDI1Ni4wMDEgMTYwLjA5MlYyODguMTgySDMyOC4wMDFDMzM3LjU4IDI4OC4xODIgMzQ2LjI1MSAyOTMuODkxIDM1MC4wNDggMzAyLjY5M1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M352 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H352C369.673 96 384 81.673 384 64V64C384 46.327 369.673 32 352 32Z" />
            <path d="M350.048 302.693C353.83 311.496 352.033 321.723 345.455 328.695L209.455 472.799C200.392 482.4 183.611 482.4 174.548 472.799L38.548 328.695C31.97 321.723 30.173 311.496 33.955 302.693C37.751 293.891 46.423 288.182 56.001 288.182H128.001V160.092C128.001 142.404 142.328 128.068 160.001 128.068H224.001C241.673 128.068 256.001 142.404 256.001 160.092V288.182H328.001C337.58 288.182 346.251 293.891 350.048 302.693Z" />
    </Icon>
);

export default DownFromLine;