
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/building?s=duotone building}
 * @preview ![building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0NCAyNTYuMDI5SDExMkMxMDMuMTY0IDI1Ni4wMjkgOTYgMjYzLjE5MSA5NiAyNzIuMDI5VjMwNC4wMjlDOTYgMzEyLjg2NSAxMDMuMTY0IDMyMC4wMjkgMTEyIDMyMC4wMjlIMTQ0QzE1Mi44MzYgMzIwLjAyOSAxNjAgMzEyLjg2NSAxNjAgMzA0LjAyOVYyNzIuMDI5QzE2MCAyNjMuMTkxIDE1Mi44MzYgMjU2LjAyOSAxNDQgMjU2LjAyOVpNMTQ0IDE2MC4wMjlIMTEyQzEwMy4xNjQgMTYwLjAyOSA5NiAxNjcuMTkxIDk2IDE3Ni4wMjlWMjA4LjAyOUM5NiAyMTYuODY1IDEwMy4xNjQgMjI0LjAyOSAxMTIgMjI0LjAyOUgxNDRDMTUyLjgzNiAyMjQuMDI5IDE2MCAyMTYuODY1IDE2MCAyMDguMDI5VjE3Ni4wMjlDMTYwIDE2Ny4xOTEgMTUyLjgzNiAxNjAuMDI5IDE0NCAxNjAuMDI5Wk0xNDQgNjQuMDI5SDExMkMxMDMuMTY0IDY0LjAyOSA5NiA3MS4xOTEgOTYgODAuMDI5VjExMi4wMjlDOTYgMTIwLjg2NSAxMDMuMTY0IDEyOC4wMjkgMTEyIDEyOC4wMjlIMTQ0QzE1Mi44MzYgMTI4LjAyOSAxNjAgMTIwLjg2NSAxNjAgMTEyLjAyOVY4MC4wMjlDMTYwIDcxLjE5MSAxNTIuODM2IDY0LjAyOSAxNDQgNjQuMDI5Wk0yNzIgMjU2LjAyOUgyNDBDMjMxLjE2NCAyNTYuMDI5IDIyNCAyNjMuMTkxIDIyNCAyNzIuMDI5VjMwNC4wMjlDMjI0IDMxMi44NjUgMjMxLjE2NCAzMjAuMDI5IDI0MCAzMjAuMDI5SDI3MkMyODAuODM2IDMyMC4wMjkgMjg4IDMxMi44NjUgMjg4IDMwNC4wMjlWMjcyLjAyOUMyODggMjYzLjE5MSAyODAuODM2IDI1Ni4wMjkgMjcyIDI1Ni4wMjlaTTI3MiAxNjAuMDI5SDI0MEMyMzEuMTY0IDE2MC4wMjkgMjI0IDE2Ny4xOTEgMjI0IDE3Ni4wMjlWMjA4LjAyOUMyMjQgMjE2Ljg2NSAyMzEuMTY0IDIyNC4wMjkgMjQwIDIyNC4wMjlIMjcyQzI4MC44MzYgMjI0LjAyOSAyODggMjE2Ljg2NSAyODggMjA4LjAyOVYxNzYuMDI5QzI4OCAxNjcuMTkxIDI4MC44MzYgMTYwLjAyOSAyNzIgMTYwLjAyOVpNMjcyIDY0LjAyOUgyNDBDMjMxLjE2NCA2NC4wMjkgMjI0IDcxLjE5MSAyMjQgODAuMDI5VjExMi4wMjlDMjI0IDEyMC44NjUgMjMxLjE2NCAxMjguMDI5IDI0MCAxMjguMDI5SDI3MkMyODAuODM2IDEyOC4wMjkgMjg4IDEyMC44NjUgMjg4IDExMi4wMjlWODAuMDI5QzI4OCA3MS4xOTEgMjgwLjgzNiA2NC4wMjkgMjcyIDY0LjAyOVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzM2IDAuMDI5SDQ4QzIxLjQ5IDAuMDI5IDAgMjEuNTE5IDAgNDguMDI5VjQ4MC4wMjlDMCA0OTcuNzAyIDE0LjMyNyA1MTIuMDI5IDMyIDUxMi4wMjlIMTQ0VjQzMi4wMjlDMTQ0IDQwNS41MTkgMTY1LjQ5IDM4NC4wMjkgMTkyIDM4NC4wMjlTMjQwIDQwNS41MTkgMjQwIDQzMi4wMjlWNTEyLjAyOUgzNTJDMzY5LjY3MyA1MTIuMDI5IDM4NCA0OTcuNzAyIDM4NCA0ODAuMDI5VjQ4LjAyOUMzODQgMjEuNTE5IDM2Mi41MSAwLjAyOSAzMzYgMC4wMjlaTTE2MCAzMDQuMDI5QzE2MCAzMTIuODY1IDE1Mi44MzYgMzIwLjAyOSAxNDQgMzIwLjAyOUgxMTJDMTAzLjE2NCAzMjAuMDI5IDk2IDMxMi44NjUgOTYgMzA0LjAyOVYyNzIuMDI5Qzk2IDI2My4xOTEgMTAzLjE2NCAyNTYuMDI5IDExMiAyNTYuMDI5SDE0NEMxNTIuODM2IDI1Ni4wMjkgMTYwIDI2My4xOTEgMTYwIDI3Mi4wMjlWMzA0LjAyOVpNMTYwIDIwOC4wMjlDMTYwIDIxNi44NjUgMTUyLjgzNiAyMjQuMDI5IDE0NCAyMjQuMDI5SDExMkMxMDMuMTY0IDIyNC4wMjkgOTYgMjE2Ljg2NSA5NiAyMDguMDI5VjE3Ni4wMjlDOTYgMTY3LjE5MSAxMDMuMTY0IDE2MC4wMjkgMTEyIDE2MC4wMjlIMTQ0QzE1Mi44MzYgMTYwLjAyOSAxNjAgMTY3LjE5MSAxNjAgMTc2LjAyOVYyMDguMDI5Wk0xNjAgMTEyLjAyOUMxNjAgMTIwLjg2NSAxNTIuODM2IDEyOC4wMjkgMTQ0IDEyOC4wMjlIMTEyQzEwMy4xNjQgMTI4LjAyOSA5NiAxMjAuODY1IDk2IDExMi4wMjlWODAuMDI5Qzk2IDcxLjE5MSAxMDMuMTY0IDY0LjAyOSAxMTIgNjQuMDI5SDE0NEMxNTIuODM2IDY0LjAyOSAxNjAgNzEuMTkxIDE2MCA4MC4wMjlWMTEyLjAyOVpNMjg4IDMwNC4wMjlDMjg4IDMxMi44NjUgMjgwLjgzNiAzMjAuMDI5IDI3MiAzMjAuMDI5SDI0MEMyMzEuMTY0IDMyMC4wMjkgMjI0IDMxMi44NjUgMjI0IDMwNC4wMjlWMjcyLjAyOUMyMjQgMjYzLjE5MSAyMzEuMTY0IDI1Ni4wMjkgMjQwIDI1Ni4wMjlIMjcyQzI4MC44MzYgMjU2LjAyOSAyODggMjYzLjE5MSAyODggMjcyLjAyOVYzMDQuMDI5Wk0yODggMjA4LjAyOUMyODggMjE2Ljg2NSAyODAuODM2IDIyNC4wMjkgMjcyIDIyNC4wMjlIMjQwQzIzMS4xNjQgMjI0LjAyOSAyMjQgMjE2Ljg2NSAyMjQgMjA4LjAyOVYxNzYuMDI5QzIyNCAxNjcuMTkxIDIzMS4xNjQgMTYwLjAyOSAyNDAgMTYwLjAyOUgyNzJDMjgwLjgzNiAxNjAuMDI5IDI4OCAxNjcuMTkxIDI4OCAxNzYuMDI5VjIwOC4wMjlaTTI4OCAxMTIuMDI5QzI4OCAxMjAuODY1IDI4MC44MzYgMTI4LjAyOSAyNzIgMTI4LjAyOUgyNDBDMjMxLjE2NCAxMjguMDI5IDIyNCAxMjAuODY1IDIyNCAxMTIuMDI5VjgwLjAyOUMyMjQgNzEuMTkxIDIzMS4xNjQgNjQuMDI5IDI0MCA2NC4wMjlIMjcyQzI4MC44MzYgNjQuMDI5IDI4OCA3MS4xOTEgMjg4IDgwLjAyOVYxMTIuMDI5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Building: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 256.029H112C103.164 256.029 96 263.191 96 272.029V304.029C96 312.865 103.164 320.029 112 320.029H144C152.836 320.029 160 312.865 160 304.029V272.029C160 263.191 152.836 256.029 144 256.029ZM144 160.029H112C103.164 160.029 96 167.191 96 176.029V208.029C96 216.865 103.164 224.029 112 224.029H144C152.836 224.029 160 216.865 160 208.029V176.029C160 167.191 152.836 160.029 144 160.029ZM144 64.029H112C103.164 64.029 96 71.191 96 80.029V112.029C96 120.865 103.164 128.029 112 128.029H144C152.836 128.029 160 120.865 160 112.029V80.029C160 71.191 152.836 64.029 144 64.029ZM272 256.029H240C231.164 256.029 224 263.191 224 272.029V304.029C224 312.865 231.164 320.029 240 320.029H272C280.836 320.029 288 312.865 288 304.029V272.029C288 263.191 280.836 256.029 272 256.029ZM272 160.029H240C231.164 160.029 224 167.191 224 176.029V208.029C224 216.865 231.164 224.029 240 224.029H272C280.836 224.029 288 216.865 288 208.029V176.029C288 167.191 280.836 160.029 272 160.029ZM272 64.029H240C231.164 64.029 224 71.191 224 80.029V112.029C224 120.865 231.164 128.029 240 128.029H272C280.836 128.029 288 120.865 288 112.029V80.029C288 71.191 280.836 64.029 272 64.029Z" />
            <path d="M336 0.029H48C21.49 0.029 0 21.519 0 48.029V480.029C0 497.702 14.327 512.029 32 512.029H144V432.029C144 405.519 165.49 384.029 192 384.029S240 405.519 240 432.029V512.029H352C369.673 512.029 384 497.702 384 480.029V48.029C384 21.519 362.51 0.029 336 0.029ZM160 304.029C160 312.865 152.836 320.029 144 320.029H112C103.164 320.029 96 312.865 96 304.029V272.029C96 263.191 103.164 256.029 112 256.029H144C152.836 256.029 160 263.191 160 272.029V304.029ZM160 208.029C160 216.865 152.836 224.029 144 224.029H112C103.164 224.029 96 216.865 96 208.029V176.029C96 167.191 103.164 160.029 112 160.029H144C152.836 160.029 160 167.191 160 176.029V208.029ZM160 112.029C160 120.865 152.836 128.029 144 128.029H112C103.164 128.029 96 120.865 96 112.029V80.029C96 71.191 103.164 64.029 112 64.029H144C152.836 64.029 160 71.191 160 80.029V112.029ZM288 304.029C288 312.865 280.836 320.029 272 320.029H240C231.164 320.029 224 312.865 224 304.029V272.029C224 263.191 231.164 256.029 240 256.029H272C280.836 256.029 288 263.191 288 272.029V304.029ZM288 208.029C288 216.865 280.836 224.029 272 224.029H240C231.164 224.029 224 216.865 224 208.029V176.029C224 167.191 231.164 160.029 240 160.029H272C280.836 160.029 288 167.191 288 176.029V208.029ZM288 112.029C288 120.865 280.836 128.029 272 128.029H240C231.164 128.029 224 120.865 224 112.029V80.029C224 71.191 231.164 64.029 240 64.029H272C280.836 64.029 288 71.191 288 80.029V112.029Z" />
    </Icon>
);

export default Building;