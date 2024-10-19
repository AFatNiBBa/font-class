
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `whale` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=thin whale}
 * @preview ![whale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTI4LjAwMUMzODguOTA2IDEyOC4wMDEgMzAzLjI4MSAxNjMuNDcgMjM4Ljg3NSAyMjcuODc2TDE1My4yMTkgMzEwLjU2M0MxNDYuOTA2IDMxNi42NTcgMTM4LjU5NCAzMjAuMDAxIDEyOS44MTIgMzIwLjAwMUMxMTEuMTU2IDMyMC4wMDEgOTYgMzA0Ljg0NCA5NiAyODYuMTg4Qzk2IDI1NC42MzIgMTA4LjI3NyAyMjQuOTgzIDEzMC41ODIgMjAyLjY3MUwxNDAuMzkzIDE5Mi44NjFMMTk3LjEzOSAyMDYuNDc0QzE5OS4yMyAyMDYuOSAyMDEuMzQyIDIwNy4xMDcgMjAzLjQzOSAyMDcuMTA3QzIxMS43OTkgMjA3LjEwNyAyMTkuOTY1IDIwMy44IDIyNi4wNDEgMTk3LjcyNEwyODMuMzE2IDE0MC40NDlDMjkyLjMzMiAxMzEuNDMzIDI4Ny42NDggMTE1Ljk2NCAyNzUuMDk2IDExMy40OUwxOTEuMzI0IDk2LjcwMUwxOTEuMzAxIDk2LjY3N0wxNzQuNTEgMTIuOTA0QzE3Mi45MTYgNC44MjIgMTY1LjkzNCAwLjAwMiAxNTguNzU4IDBDMTU0Ljc4OSAwIDE1MC43NjIgMS40NzUgMTQ3LjU1MyA0LjY4NEw5MC4yNzcgNjEuOTU5QzgyLjY3NiA2OS41NjIgNzkuNDA2IDgwLjQzMSA4MS41MjcgOTAuODYzTDk1LjEzOSAxNDcuNjA3TDU3LjM3MSAxODUuMzcyTDU3LjM3NyAxODUuMzc0TDQ5LjEyNSAxOTMuNjI2QzE3LjQzOCAyMjUuMzE0IDAgMjY3LjQzOCAwIDMxMi4yNTFDMCA0MDQuNzUgNzUuMjUgNDgwIDE2Ny43NSA0ODBINTQ0QzU5Ni45MzggNDgwIDY0MCA0MzYuOTM4IDY0MCAzODRWMjg4LjAwMUM2NDAgMTk5Ljc4MiA1NjguMjE5IDEyOC4wMDEgNDgwIDEyOC4wMDFaTTYyNCAzODRDNjI0IDQyOC4xMTIgNTg4LjExMSA0NjQgNTQ0IDQ2NEgxNjcuNzVDODQuMDc0IDQ2NCAxNiAzOTUuOTI2IDE2IDMxMi4yNTFDMTYgMjcxLjcwNiAzMS43ODEgMjMzLjU5NyA2MC40NDMgMjA0LjkzNUw2OC42ODYgMTk2LjY4N0wxMDYuNDUzIDE1OC45MjFMMTEyLjc4NyAxNTIuNTg3TDExMC42OTcgMTQzLjg3NEw5Ny4yMDcgODcuNjc1Qzk2LjE0NiA4Mi40NjMgOTcuNzg3IDc3LjA3OCAxMDEuNTkyIDczLjI3M0wxNTguODIyIDE2LjA0OUwxNzUuNjEzIDk5LjgyMkwxNzYuNTg4IDEwNC41OTFMMTgwLjAxIDEwOC4wMTVMMTgzLjQzNCAxMTEuNDM3TDE4OC4xOCAxMTIuMzg4TDI3Mi4wMDQgMTI5LjEzNkwyMTQuNzI3IDE4Ni40MDlDMjExLjc0MiAxODkuMzk2IDIwNy42MjcgMTkxLjEwNyAyMDMuNDM5IDE5MS4xMDdDMjAyLjQwMiAxOTEuMTA3IDIwMS4zNTkgMTkxLjAwNSAyMDAuODcxIDE5MC45MTVMMTQ0LjEyNSAxNzcuMzAyTDEzNS40MTQgMTc1LjIxMkwxMjkuMDc4IDE4MS41NDZMMTE5LjI2NiAxOTEuMzU5QzkzLjk0NSAyMTYuNjg5IDgwIDI1MC4zNjYgODAgMjg2LjE4OEM4MCAzMTMuNjU1IDEwMi4zNDYgMzM2LjAwMSAxMjkuODEyIDMzNi4wMDFDMTQyLjc3IDMzNi4wMDEgMTU1LjAyOSAzMzEuMDU1IDE2NC4zMzIgMzIyLjA3NUwyNTAuMTg5IDIzOS4xOUMzMTEuNTcyIDE3Ny44MDYgMzkzLjE4OCAxNDQuMDAxIDQ4MCAxNDQuMDAxQzU1OS40MDIgMTQ0LjAwMSA2MjQgMjA4LjU5OSA2MjQgMjg4LjAwMVYzODRaTTM4NCAyNzIuMDAxQzM3NS4xNjQgMjcyLjAwMSAzNjggMjc5LjE2MyAzNjggMjg4LjAwMUMzNjggMjk2LjgzNyAzNzUuMTY0IDMwNC4wMDEgMzg0IDMwNC4wMDFTNDAwIDI5Ni44MzcgNDAwIDI4OC4wMDFDNDAwIDI3OS4xNjMgMzkyLjgzNiAyNzIuMDAxIDM4NCAyNzIuMDAxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Whale(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M480 128.001C388.906 128.001 303.281 163.47 238.875 227.876L153.219 310.563C146.906 316.657 138.594 320.001 129.812 320.001C111.156 320.001 96 304.844 96 286.188C96 254.632 108.277 224.983 130.582 202.671L140.393 192.861L197.139 206.474C199.23 206.9 201.342 207.107 203.439 207.107C211.799 207.107 219.965 203.8 226.041 197.724L283.316 140.449C292.332 131.433 287.648 115.964 275.096 113.49L191.324 96.701L191.301 96.677L174.51 12.904C172.916 4.822 165.934 0.002 158.758 0C154.789 0 150.762 1.475 147.553 4.684L90.277 61.959C82.676 69.562 79.406 80.431 81.527 90.863L95.139 147.607L57.371 185.372L57.377 185.374L49.125 193.626C17.438 225.314 0 267.438 0 312.251C0 404.75 75.25 480 167.75 480H544C596.938 480 640 436.938 640 384V288.001C640 199.782 568.219 128.001 480 128.001ZM624 384C624 428.112 588.111 464 544 464H167.75C84.074 464 16 395.926 16 312.251C16 271.706 31.781 233.597 60.443 204.935L68.686 196.687L106.453 158.921L112.787 152.587L110.697 143.874L97.207 87.675C96.146 82.463 97.787 77.078 101.592 73.273L158.822 16.049L175.613 99.822L176.588 104.591L180.01 108.015L183.434 111.437L188.18 112.388L272.004 129.136L214.727 186.409C211.742 189.396 207.627 191.107 203.439 191.107C202.402 191.107 201.359 191.005 200.871 190.915L144.125 177.302L135.414 175.212L129.078 181.546L119.266 191.359C93.945 216.689 80 250.366 80 286.188C80 313.655 102.346 336.001 129.812 336.001C142.77 336.001 155.029 331.055 164.332 322.075L250.189 239.19C311.572 177.806 393.188 144.001 480 144.001C559.402 144.001 624 208.599 624 288.001V384ZM384 272.001C375.164 272.001 368 279.163 368 288.001C368 296.837 375.164 304.001 384 304.001S400 296.837 400 288.001C400 279.163 392.836 272.001 384 272.001Z" />
        </Icon>
    </>
}