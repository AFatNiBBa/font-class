
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-8` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-8?s=duotone circle-8}
 * @preview ![circle-8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiAyNzJIMjQwQzIyMi4zNDQgMjcyIDIwOCAyODYuMzQ0IDIwOCAzMDRTMjIyLjM0NCAzMzYgMjQwIDMzNkgyNzJDMjg5LjY1NiAzMzYgMzA0IDMyMS42NTYgMzA0IDMwNFMyODkuNjU2IDI3MiAyNzIgMjcyWk0yNDggMjI0SDI2NEMyNzcuMjE5IDIyNCAyODggMjEzLjIxOSAyODggMjAwUzI3Ny4yMTkgMTc2IDI2NCAxNzZIMjQ4QzIzNC43ODEgMTc2IDIyNCAxODYuNzgxIDIyNCAyMDBTMjM0Ljc4MSAyMjQgMjQ4IDIyNFpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNzIgMzg0SDI0MEMxOTUuODc1IDM4NCAxNjAgMzQ4LjEyNSAxNjAgMzA0QzE2MCAyNzguOTM4IDE3MS44MTEgMjU2LjgxMiAxODkuODk2IDI0Mi4xMzVDMTgxLjI1NCAyMzAuMjU4IDE3NiAyMTUuNzczIDE3NiAyMDBDMTc2IDE2MC4zMTIgMjA4LjMxMiAxMjggMjQ4IDEyOEgyNjRDMzAzLjY4OCAxMjggMzM2IDE2MC4zMTIgMzM2IDIwMEMzMzYgMjE1Ljc3MyAzMzAuNzQ2IDIzMC4yNTggMzIyLjEwNCAyNDIuMTM1QzM0MC4xODkgMjU2LjgxMiAzNTIgMjc4LjkzOCAzNTIgMzA0QzM1MiAzNDguMTI1IDMxNi4xMjUgMzg0IDI3MiAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyMi4xMDQgMjQyLjEzNUMzMzAuNzQ2IDIzMC4yNTggMzM2IDIxNS43NzMgMzM2IDIwMEMzMzYgMTYwLjMxMiAzMDMuNjg4IDEyOCAyNjQgMTI4SDI0OEMyMDguMzEyIDEyOCAxNzYgMTYwLjMxMiAxNzYgMjAwQzE3NiAyMTUuNzczIDE4MS4yNTQgMjMwLjI1OCAxODkuODk2IDI0Mi4xMzVDMTcxLjgxMSAyNTYuODEyIDE2MCAyNzguOTM4IDE2MCAzMDRDMTYwIDM0OC4xMjUgMTk1Ljg3NSAzODQgMjQwIDM4NEgyNzJDMzE2LjEyNSAzODQgMzUyIDM0OC4xMjUgMzUyIDMwNEMzNTIgMjc4LjkzOCAzNDAuMTg5IDI1Ni44MTIgMzIyLjEwNCAyNDIuMTM1Wk0yNDggMTc2SDI2NEMyNzcuMjE5IDE3NiAyODggMTg2Ljc4MSAyODggMjAwUzI3Ny4yMTkgMjI0IDI2NCAyMjRIMjQ4QzIzNC43ODEgMjI0IDIyNCAyMTMuMjE5IDIyNCAyMDBTMjM0Ljc4MSAxNzYgMjQ4IDE3NlpNMjcyIDMzNkgyNDBDMjIyLjM0NCAzMzYgMjA4IDMyMS42NTYgMjA4IDMwNFMyMjIuMzQ0IDI3MiAyNDAgMjcySDI3MkMyODkuNjU2IDI3MiAzMDQgMjg2LjM0NCAzMDQgMzA0UzI4OS42NTYgMzM2IDI3MiAzMzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Circle_8: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M272 272H240C222.344 272 208 286.344 208 304S222.344 336 240 336H272C289.656 336 304 321.656 304 304S289.656 272 272 272ZM248 224H264C277.219 224 288 213.219 288 200S277.219 176 264 176H248C234.781 176 224 186.781 224 200S234.781 224 248 224ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM272 384H240C195.875 384 160 348.125 160 304C160 278.938 171.811 256.812 189.896 242.135C181.254 230.258 176 215.773 176 200C176 160.312 208.312 128 248 128H264C303.688 128 336 160.312 336 200C336 215.773 330.746 230.258 322.104 242.135C340.189 256.812 352 278.938 352 304C352 348.125 316.125 384 272 384Z" />
            <path d="M322.104 242.135C330.746 230.258 336 215.773 336 200C336 160.312 303.688 128 264 128H248C208.312 128 176 160.312 176 200C176 215.773 181.254 230.258 189.896 242.135C171.811 256.812 160 278.938 160 304C160 348.125 195.875 384 240 384H272C316.125 384 352 348.125 352 304C352 278.938 340.189 256.812 322.104 242.135ZM248 176H264C277.219 176 288 186.781 288 200S277.219 224 264 224H248C234.781 224 224 213.219 224 200S234.781 176 248 176ZM272 336H240C222.344 336 208 321.656 208 304S222.344 272 240 272H272C289.656 272 304 286.344 304 304S289.656 336 272 336Z" />
    </Icon>
);

export default Circle_8;