
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=duotone message-quote}
 * @preview ![message-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAwSDY0QzI4Ljc1IDAgMCAyOC43NDggMCA2My45OTRWMzUyQzAgMzg3LjI0NiAyOC43NSA0MTUuOTk0IDY0IDQxNS45OTRIMTYwVjQ5OS45NTlDMTYwIDUwOS43MDkgMTcxLjI1IDUxNS40NjEgMTc5LjEyNSA1MDkuNzA5TDMwNCA0MTUuOTk0SDQ0OEM0ODMuMjUgNDE1Ljk5NCA1MTIgMzg3LjI0NiA1MTIgMzUyVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk0yNDAgMjI0QzI0MCAyNjguMTg4IDIwNC4xODggMzA0IDE2MCAzMDRIMTU2QzE0OS4zNzUgMzA0IDE0NCAyOTguNjI1IDE0NCAyOTJWMjY4QzE0NCAyNjEuMzc1IDE0OS4zNzUgMjU2IDE1NiAyNTZIMTYwQzE3Ny42MjUgMjU2IDE5MiAyNDEuNjI1IDE5MiAyMjRWMjA4SDE1MkMxMzguNzUgMjA4IDEyOCAxOTcuMjUgMTI4IDE4NFYxMzZDMTI4IDEyMi43NSAxMzguNzUgMTEyIDE1MiAxMTJIMjE2QzIyOS4yNSAxMTIgMjQwIDEyMi43NSAyNDAgMTM2VjIyNFpNMzg0IDIyNEMzODQgMjY4LjE4OCAzNDguMTg4IDMwNCAzMDQgMzA0SDMwMEMyOTMuMzc1IDMwNCAyODggMjk4LjYyNSAyODggMjkyVjI2OEMyODggMjYxLjM3NSAyOTMuMzc1IDI1NiAzMDAgMjU2SDMwNEMzMjEuNjI1IDI1NiAzMzYgMjQxLjYyNSAzMzYgMjI0VjIwOEgyOTZDMjgyLjc1IDIwOCAyNzIgMTk3LjI1IDI3MiAxODRWMTM2QzI3MiAxMjIuNzUgMjgyLjc1IDExMiAyOTYgMTEySDM2MEMzNzMuMjUgMTEyIDM4NCAxMjIuNzUgMzg0IDEzNlYyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIxNiAxMTIuMDAySDE1MkMxMzguNzUgMTEyLjAwMiAxMjggMTIyLjc1MiAxMjggMTM2LjAwMlYxODQuMDAyQzEyOCAxOTcuMjUyIDEzOC43NSAyMDguMDAyIDE1MiAyMDguMDAySDE5MlYyMjQuMDAyQzE5MiAyNDEuNjI3IDE3Ny42MjUgMjU2LjAwMiAxNjAgMjU2LjAwMkgxNTZDMTQ5LjM3NSAyNTYuMDAyIDE0NCAyNjEuMzc3IDE0NCAyNjguMDAyVjI5Mi4wMDJDMTQ0IDI5OC42MjcgMTQ5LjM3NSAzMDQuMDAyIDE1NiAzMDQuMDAySDE2MEMyMDQuMTg4IDMwNC4wMDIgMjQwIDI2OC4xODkgMjQwIDIyNC4wMDJWMTM2LjAwMkMyNDAgMTIyLjc1MiAyMjkuMjUgMTEyLjAwMiAyMTYgMTEyLjAwMlpNMzYwIDExMi4wMDJIMjk2QzI4Mi43NSAxMTIuMDAyIDI3MiAxMjIuNzUyIDI3MiAxMzYuMDAyVjE4NC4wMDJDMjcyIDE5Ny4yNTIgMjgyLjc1IDIwOC4wMDIgMjk2IDIwOC4wMDJIMzM2VjIyNC4wMDJDMzM2IDI0MS42MjcgMzIxLjYyNSAyNTYuMDAyIDMwNCAyNTYuMDAySDMwMEMyOTMuMzc1IDI1Ni4wMDIgMjg4IDI2MS4zNzcgMjg4IDI2OC4wMDJWMjkyLjAwMkMyODggMjk4LjYyNyAyOTMuMzc1IDMwNC4wMDIgMzAwIDMwNC4wMDJIMzA0QzM0OC4xODggMzA0LjAwMiAzODQgMjY4LjE4OSAzODQgMjI0LjAwMlYxMzYuMDAyQzM4NCAxMjIuNzUyIDM3My4yNSAxMTIuMDAyIDM2MCAxMTIuMDAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.246 28.75 415.994 64 415.994H160V499.959C160 509.709 171.25 515.461 179.125 509.709L304 415.994H448C483.25 415.994 512 387.246 512 352V63.994C512 28.748 483.25 0 448 0ZM240 224C240 268.188 204.188 304 160 304H156C149.375 304 144 298.625 144 292V268C144 261.375 149.375 256 156 256H160C177.625 256 192 241.625 192 224V208H152C138.75 208 128 197.25 128 184V136C128 122.75 138.75 112 152 112H216C229.25 112 240 122.75 240 136V224ZM384 224C384 268.188 348.188 304 304 304H300C293.375 304 288 298.625 288 292V268C288 261.375 293.375 256 300 256H304C321.625 256 336 241.625 336 224V208H296C282.75 208 272 197.25 272 184V136C272 122.75 282.75 112 296 112H360C373.25 112 384 122.75 384 136V224Z" />
            <path d="M216 112.002H152C138.75 112.002 128 122.752 128 136.002V184.002C128 197.252 138.75 208.002 152 208.002H192V224.002C192 241.627 177.625 256.002 160 256.002H156C149.375 256.002 144 261.377 144 268.002V292.002C144 298.627 149.375 304.002 156 304.002H160C204.188 304.002 240 268.189 240 224.002V136.002C240 122.752 229.25 112.002 216 112.002ZM360 112.002H296C282.75 112.002 272 122.752 272 136.002V184.002C272 197.252 282.75 208.002 296 208.002H336V224.002C336 241.627 321.625 256.002 304 256.002H300C293.375 256.002 288 261.377 288 268.002V292.002C288 298.627 293.375 304.002 300 304.002H304C348.188 304.002 384 268.189 384 224.002V136.002C384 122.752 373.25 112.002 360 112.002Z" />
    </Icon>
);

export default MessageQuote;