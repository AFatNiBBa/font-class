
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `crutch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=duotone crutch}
 * @preview ![crutch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi41NzEgMTY4Ljk4OEwzNDMuMDA4IDkuNDQyQzMzMC40NjcgLTMuMDk4IDMxMC4xNTMgLTMuMTU1IDI5Ny41NDQgOS4zMTZDMjg0Ljg2NyAyMS44NTEgMjg0LjgxMiA0Mi40MiAyOTcuNDE4IDU1LjAyNkw0NTYuOTgyIDIxNC41NzJDNDY5LjU3NyAyMjcuMTY3IDQ5MC4wMDkgMjI3LjEzOSA1MDIuNTcxIDIxNC41MDlMNTAyLjYzNCAyMTQuNDQ2QzUxNS4xNDcgMjAxLjg2NiA1MTUuMTE4IDE4MS41MzMgNTAyLjU3MSAxNjguOTg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTEuMTQxIDE2OC43MzRMMzM0LjQ0NyAyNDUuNDI4TDI2Ni41NzIgMTc3LjU1M0wzNDMuMjYyIDEwMC44NjNMMjk4LjAwOCA1NS42MTVMMTY2LjY5NyAxODYuODAzQzE1NC4wNzIgMTk5LjU1MyAxNDUuMTk3IDIxNS41NTMgMTQxLjA3MiAyMzMuMTc4TDExMy4zMjIgMzUzLjQyOEw0LjY4OCA0NjIuMDYyQy0xLjU2MyA0NjguMzEyIC0xLjU2MyA0NzguNDM4IDQuNjg4IDQ4NC42ODdMMjcuMzEyIDUwNy4zMTJDMzMuNTYyIDUxMy41NjIgNDMuNjg4IDUxMy41NjIgNDkuOTM3IDUwNy4zMTJMMTU4LjU3MiAzOTguNjc4TDI3OC44MjIgMzcwLjkyOEMyOTYuMzIyIDM2Ni44MDMgMzEyLjQ0NyAzNTcuOTI4IDMyNS4xOTcgMzQ1LjMwM0w0NTYuMzkzIDIxMy45ODJMNDExLjE0MSAxNjguNzM0Wk0yNzkuOTQ3IDMwMC4wNTNDMjc1LjY5NyAzMDQuMTc4IDI3MC4zMjIgMzA3LjE3OCAyNjQuNDQ3IDMwOC41NTNMMTg1LjE5NyAzMjYuODAzTDIwMy40NDcgMjQ3LjU1M0MyMDQuODIyIDI0MS42NzggMjA3LjgyMiAyMzYuMzAzIDIxMS45NDcgMjMyLjA1M0wyMjEuMzIyIDIyMi44MDNMMjg5LjE5NyAyOTAuNjc4TDI3OS45NDcgMzAwLjA1M1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Crutch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M502.571 168.988L343.008 9.442C330.467 -3.098 310.153 -3.155 297.544 9.316C284.867 21.851 284.812 42.42 297.418 55.026L456.982 214.572C469.577 227.167 490.009 227.139 502.571 214.509L502.634 214.446C515.147 201.866 515.118 181.533 502.571 168.988Z" />
            <path d="M411.141 168.734L334.447 245.428L266.572 177.553L343.262 100.863L298.008 55.615L166.697 186.803C154.072 199.553 145.197 215.553 141.072 233.178L113.322 353.428L4.688 462.062C-1.563 468.312 -1.563 478.438 4.688 484.687L27.312 507.312C33.562 513.562 43.688 513.562 49.937 507.312L158.572 398.678L278.822 370.928C296.322 366.803 312.447 357.928 325.197 345.303L456.393 213.982L411.141 168.734ZM279.947 300.053C275.697 304.178 270.322 307.178 264.447 308.553L185.197 326.803L203.447 247.553C204.822 241.678 207.822 236.303 211.947 232.053L221.322 222.803L289.197 290.678L279.947 300.053Z" />
        </Icon>
    </>
}