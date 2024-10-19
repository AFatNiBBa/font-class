
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-ski-jumping` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-jumping?s=thin person-ski-jumping}
 * @preview ![person-ski-jumping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgMTc2QzQ5OS41OTQgMTc2IDQ5NiAxNzkuNTk0IDQ5NiAxODRWMjA5QzQ5NiAyMzAuMDYyIDQ4NC4zNzUgMjQ5LjEyNSA0NjUuNjg3IDI1OC43ODFMNC4zMzYgNDk2LjkwNkMwLjM5OCA0OTguOTA2IC0xLjEzNSA1MDMuNzUgMC44OTggNTA3LjY1NkMyLjMwNSA1MTAuNDM4IDUuMDg2IDUxMiA3Ljk5MiA1MTJDOS4yNDIgNTEyIDEwLjQ5MiA1MTEuNzE5IDExLjY0OCA1MTEuMDk0TDQ3MyAyNzNDNDk3LjA2MiAyNjAuNTk0IDUxMiAyMzYuMDYyIDUxMiAyMDlWMTg0QzUxMiAxNzkuNTk0IDUwOC40MDYgMTc2IDUwNCAxNzZaTTEyNy45NTUgMTYwSDIyNS40NTdMMTY2Ljk4NiAyMzYuOTI4QzE2NC41OCAyNDAuMDk0IDE2Mi40NzUgMjQzLjQ3NyAxNjAuNjk3IDI0Ny4wMzNMMTA3LjM2NyAzNTMuNjg4Qzk5LjQ2MSAzNjkuNSAxMDUuODY3IDM4OC43MTkgMTIxLjY4MiAzOTYuNjI1QzEyNi4yNzUgMzk4LjkwNiAxMzEuMTUgNDAwIDEzNS45NjMgNDAwQzE0Ny43MTMgNDAwIDE1OC45OTQgMzkzLjUzMSAxNjQuNjE5IDM4Mi4zMTJMMjEzLjQzNSAyODQuNjc4QzIxNi43NzcgMjc3Ljk5NiAyMjEuMjQyIDI3Mi4wNzYgMjI2Ljc3OSAyNjcuMDYyQzI1NC4xODMgMjQyLjI0OCAzNDAuMjExIDE2NC4yNSAzNDAuMjExIDE2NC4yNUMzNTEuNzEzIDE1Mi43NSAzNTUuMjEzIDEzNS43NSAzNDguOTYzIDEyMC43NVMzMjguMjExIDk2IDMxMS45NjEgOTZIMTI3Ljk1NUMxMTAuMjAzIDk2IDk1Ljk1MSAxMTAuMjUgOTUuOTUxIDEyOFMxMTAuMjAzIDE2MCAxMjcuOTU1IDE2MFpNMTI3Ljk1NSAxMTJIMzExLjk2MUMzMjEuNjkzIDExMiAzMzAuNDIgMTE3Ljg1IDMzNC4xOTEgMTI2LjkwNEMzMzcuODk2IDEzNS43OTcgMzM1LjgxOCAxNDYuMDE0IDMyOS40NjUgMTUyLjM5NkwyMTYuMDM5IDI1NS4yMDNDMjA5LjA2IDI2MS41MjEgMjAzLjM3MSAyNjkuMDMxIDE5OS4xMjUgMjc3LjUyM0wxNTAuMzE2IDM3NS4xNDFDMTQ3LjU3NiAzODAuNjA1IDE0Mi4wNzggMzg0IDEzNS45NjMgMzg0QzEzMy40ODggMzg0IDEzMS4wNzYgMzgzLjQyNiAxMjguODM4IDM4Mi4zMTRDMTIwLjk0NSAzNzguMzY3IDExNy43MzQgMzY4LjczNCAxMjEuNjggMzYwLjg0MkwxNzUuMDA4IDI1NC4xODlDMTc2LjM0IDI1MS41MjUgMTc3LjkyNiAyNDguOTc3IDE3OS43MjUgMjQ2LjYwOUwyMzguMTk3IDE2OS42ODJMMjU3LjcxNyAxNDRIMTI3Ljk1NUMxMTguOTgyIDE0NCAxMTEuOTUxIDEzNi45NzEgMTExLjk1MSAxMjhDMTExLjk1MSAxMTkuMDI3IDExOC45ODIgMTEyIDEyNy45NTUgMTEyWk0zOTYgMTA0QzQyNC43MDkgMTA0IDQ0OCA4MC43MDcgNDQ4IDUyQzQ0OCAyMy4yOTEgNDI0LjcwOSAwIDM5NiAwUzM0NCAyMy4yOTEgMzQ0IDUyQzM0NCA4MC43MDcgMzY3LjI5MSAxMDQgMzk2IDEwNFpNMzk2IDE2QzQxNS44NSAxNiA0MzIgMzIuMTQ4IDQzMiA1MkM0MzIgNzEuODUgNDE1Ljg1IDg4IDM5NiA4OFMzNjAgNzEuODUgMzYwIDUyQzM2MCAzMi4xNDggMzc2LjE1IDE2IDM5NiAxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonSkiJumping(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 176C499.594 176 496 179.594 496 184V209C496 230.062 484.375 249.125 465.687 258.781L4.336 496.906C0.398 498.906 -1.135 503.75 0.898 507.656C2.305 510.438 5.086 512 7.992 512C9.242 512 10.492 511.719 11.648 511.094L473 273C497.062 260.594 512 236.062 512 209V184C512 179.594 508.406 176 504 176ZM127.955 160H225.457L166.986 236.928C164.58 240.094 162.475 243.477 160.697 247.033L107.367 353.688C99.461 369.5 105.867 388.719 121.682 396.625C126.275 398.906 131.15 400 135.963 400C147.713 400 158.994 393.531 164.619 382.312L213.435 284.678C216.777 277.996 221.242 272.076 226.779 267.062C254.183 242.248 340.211 164.25 340.211 164.25C351.713 152.75 355.213 135.75 348.963 120.75S328.211 96 311.961 96H127.955C110.203 96 95.951 110.25 95.951 128S110.203 160 127.955 160ZM127.955 112H311.961C321.693 112 330.42 117.85 334.191 126.904C337.896 135.797 335.818 146.014 329.465 152.396L216.039 255.203C209.06 261.521 203.371 269.031 199.125 277.523L150.316 375.141C147.576 380.605 142.078 384 135.963 384C133.488 384 131.076 383.426 128.838 382.314C120.945 378.367 117.734 368.734 121.68 360.842L175.008 254.189C176.34 251.525 177.926 248.977 179.725 246.609L238.197 169.682L257.717 144H127.955C118.982 144 111.951 136.971 111.951 128C111.951 119.027 118.982 112 127.955 112ZM396 104C424.709 104 448 80.707 448 52C448 23.291 424.709 0 396 0S344 23.291 344 52C344 80.707 367.291 104 396 104ZM396 16C415.85 16 432 32.148 432 52C432 71.85 415.85 88 396 88S360 71.85 360 52C360 32.148 376.15 16 396 16Z" />
        </Icon>
    </>
}