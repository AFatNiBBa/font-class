
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `air-freshener` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/air-freshener?s=thin air-freshener}
 * @preview ![air-freshener](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNDQwLjAwMUg5NkM5MS41NzggNDQwLjAwMSA4OCA0NDMuNTc5IDg4IDQ0OC4wMDFTOTEuNTc4IDQ1Ni4wMDEgOTYgNDU2LjAwMUgyODhDMjkyLjQyMiA0NTYuMDAxIDI5NiA0NTIuNDIzIDI5NiA0NDguMDAxUzI5Mi40MjIgNDQwLjAwMSAyODggNDQwLjAwMVpNMjE2LjAwNiA5Ni4wMDFDMjE2LjAwNiA4Mi43NDUgMjA1LjI2MiA3Mi4wMDEgMTkyLjAwNiA3Mi4wMDFDMTc4Ljc1MiA3Mi4wMDEgMTY4LjAwNiA4Mi43NDUgMTY4LjAwNiA5Ni4wMDFDMTY4LjAwNiAxMDkuMjU1IDE3OC43NTIgMTIwLjAwMSAxOTIuMDA2IDEyMC4wMDFDMjA1LjI2MiAxMjAuMDAxIDIxNi4wMDYgMTA5LjI1NSAyMTYuMDA2IDk2LjAwMVpNMTg0LjAwNiA5Ni4wMDFDMTg0LjAwNiA5MS41ODkgMTg3LjU5NCA4OC4wMDEgMTkyLjAwNiA4OC4wMDFTMjAwLjAwNiA5MS41ODkgMjAwLjAwNiA5Ni4wMDFDMjAwLjAwNiAxMDAuNDExIDE5Ni40MTggMTA0LjAwMSAxOTIuMDA2IDEwNC4wMDFTMTg0LjAwNiAxMDAuNDExIDE4NC4wMDYgOTYuMDAxWk0zMjAgMzg0LjAwMUg2NEM0Ni4zMjcgMzg0LjAwMSAzMiAzOTguMzI3IDMyIDQxNi4wMDFWNDgwLjAwMUMzMiA0OTcuNjczIDQ2LjMyNyA1MTIuMDAxIDY0IDUxMi4wMDFIMzIwQzMzNy42NzQgNTEyLjAwMSAzNTIgNDk3LjY3MyAzNTIgNDgwLjAwMVY0MTYuMDAxQzM1MiAzOTguMzI3IDMzNy42NzQgMzg0LjAwMSAzMjAgMzg0LjAwMVpNMzM2IDQ4MC4wMDFDMzM2IDQ4OC44MjMgMzI4LjgyMyA0OTYuMDAxIDMyMCA0OTYuMDAxSDY0QzU1LjE3OCA0OTYuMDAxIDQ4IDQ4OC44MjMgNDggNDgwLjAwMVY0MTYuMDAxQzQ4IDQwNy4xNzggNTUuMTc4IDQwMC4wMDEgNjQgNDAwLjAwMUgzMjBDMzI4LjgyMyA0MDAuMDAxIDMzNiA0MDcuMTc4IDMzNiA0MTYuMDAxVjQ4MC4wMDFaTTM3Ny4xNzQgMzA2LjE0MUwzMDUuODg3IDIyNC4wMDFIMzQyLjE3NEMzNjQuMTk4IDIyNC4wMDEgMzc2LjA3OCAxOTguNDgxIDM2MS43NDMgMTgxLjk2NEwyMTEuNTQxIDguODkxQzIwNi4zOTkgMi45NjQgMTk5LjE4NCAwLjAwMSAxOTEuOTcxIDAuMDAxQzE4NC43NTQgMC4wMDEgMTc3LjU0MSAyLjk2NiAxNzIuMzk3IDguODk1TDIyLjI1NCAxODEuOTY4QzcuOTI0IDE5OC40ODUgMTkuODA1IDIyNC4wMDEgNDEuODI3IDIyNC4wMDFINzguMDg0TDYuODIzIDMwNi4xNDVDLTguODEgMzI0LjE2NSA0LjE1MSAzNTIuMDAxIDI4LjE3NiAzNTIuMDAxSDEzNkMxNDAuNDE4IDM1Mi4wMDEgMTQ0IDM0OC40MTkgMTQ0IDM0NC4wMDFTMTQwLjQxOCAzMzYuMDAxIDEzNiAzMzYuMDAxSDI4LjE3NkMxNy45NzkgMzM2LjAwMSAxMi41MDYgMzI0LjAxIDE5LjE5IDMxNi4zMDdMOTAuMTcgMjM0LjQ4NUwxMTMuMTQ3IDIwOC4wMDFINDEuODI3QzMzLjQ2NSAyMDguMDAxIDI5LjAxNCAxOTguNTk0IDM0LjM0IDE5Mi40NTJMMTg0LjQ4MyAxOS4zOEMxODcuMDQ5IDE2LjQyMyAxOTQuMzg3IDEzLjUzNCAxOTkuNDU3IDE5LjM3OEwzNDkuNjU5IDE5Mi40NTJDMzU0Ljk4OSAxOTguNTkxIDM1MC41MzUgMjA4LjAwMSAzNDIuMTc0IDIwOC4wMDFIMjcwLjgxN0wyOTMuODAzIDIzNC40ODdMMzY0LjgxMSAzMTYuMzA1QzM3MS40OTQgMzI0LjAwOSAzNjYuMDI0IDMzNi4wMDEgMzU1LjgyNSAzMzYuMDAxSDI0OEMyNDMuNTgyIDMzNi4wMDEgMjQwIDMzOS41ODMgMjQwIDM0NC4wMDFTMjQzLjU4MiAzNTIuMDAxIDI0OCAzNTIuMDAxSDM1NS44MjVDMzc5Ljg1MiAzNTIuMDAxIDM5Mi44MTMgMzI0LjE2MSAzNzcuMTc0IDMwNi4xNDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AirFreshener(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288 440.001H96C91.578 440.001 88 443.579 88 448.001S91.578 456.001 96 456.001H288C292.422 456.001 296 452.423 296 448.001S292.422 440.001 288 440.001ZM216.006 96.001C216.006 82.745 205.262 72.001 192.006 72.001C178.752 72.001 168.006 82.745 168.006 96.001C168.006 109.255 178.752 120.001 192.006 120.001C205.262 120.001 216.006 109.255 216.006 96.001ZM184.006 96.001C184.006 91.589 187.594 88.001 192.006 88.001S200.006 91.589 200.006 96.001C200.006 100.411 196.418 104.001 192.006 104.001S184.006 100.411 184.006 96.001ZM320 384.001H64C46.327 384.001 32 398.327 32 416.001V480.001C32 497.673 46.327 512.001 64 512.001H320C337.674 512.001 352 497.673 352 480.001V416.001C352 398.327 337.674 384.001 320 384.001ZM336 480.001C336 488.823 328.823 496.001 320 496.001H64C55.178 496.001 48 488.823 48 480.001V416.001C48 407.178 55.178 400.001 64 400.001H320C328.823 400.001 336 407.178 336 416.001V480.001ZM377.174 306.141L305.887 224.001H342.174C364.198 224.001 376.078 198.481 361.743 181.964L211.541 8.891C206.399 2.964 199.184 0.001 191.971 0.001C184.754 0.001 177.541 2.966 172.397 8.895L22.254 181.968C7.924 198.485 19.805 224.001 41.827 224.001H78.084L6.823 306.145C-8.81 324.165 4.151 352.001 28.176 352.001H136C140.418 352.001 144 348.419 144 344.001S140.418 336.001 136 336.001H28.176C17.979 336.001 12.506 324.01 19.19 316.307L90.17 234.485L113.147 208.001H41.827C33.465 208.001 29.014 198.594 34.34 192.452L184.483 19.38C187.049 16.423 194.387 13.534 199.457 19.378L349.659 192.452C354.989 198.591 350.535 208.001 342.174 208.001H270.817L293.803 234.487L364.811 316.305C371.494 324.009 366.024 336.001 355.825 336.001H248C243.582 336.001 240 339.583 240 344.001S243.582 352.001 248 352.001H355.825C379.852 352.001 392.813 324.161 377.174 306.141Z" />
        </Icon>
    </>
}