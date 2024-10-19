
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bicycle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=duotone bicycle}
 * @preview ![bicycle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCA0MjRDODguMjAzIDQyNCA1NiAzOTEuNzk3IDU2IDM1MlM4OC4yMDMgMjgwIDEyOCAyODBDMTI5LjY4NiAyODAgMTMxLjI2MiAyODAuMzgxIDEzMi45MTggMjgwLjQ5NEwxNTkuMDUzIDIyOC4yMjNDMTQ5LjA2MSAyMjUuNzIzIDEzOC43NzEgMjI0IDEyOCAyMjRDNTcuMjUgMjI0IDAgMjgxLjI1IDAgMzUyUzU3LjI1IDQ4MCAxMjggNDgwQzE5My4yNjggNDgwIDI0Ni40NDkgNDMxLjA5NiAyNTQuMzkxIDM2OEgxOTguMDhDMTkwLjc5NSA0MDAuMDU3IDE2Mi4yNzcgNDI0IDEyOCA0MjRaTTUxMiAyMjRDNDk4LjUyOSAyMjQgNDg1LjgwMSAyMjYuNjQ4IDQ3My42MTEgMjMwLjQ5OEw1MDAuOTcxIDI4MS4xMDlDNTA0LjU5MiAyODAuNTQ5IDUwOC4yMjEgMjgwIDUxMiAyODBDNTUxLjc5NyAyODAgNTg0IDMxMi4yMDMgNTg0IDM1MlM1NTEuNzk3IDQyNCA1MTIgNDI0UzQ0MCAzOTEuNzk3IDQ0MCAzNTJDNDQwIDMzMy40MzIgNDQ3LjIwMyAzMTYuNjg4IDQ1OC43MjUgMzAzLjkyNkw0MzEuMzYzIDI1My4zMDdDNDAyLjY3NiAyNzYuNzcgMzg0IDMxMi4wMDQgMzg0IDM1MkMzODQgNDIyLjc1IDQ0MS4yNSA0ODAgNTEyIDQ4MFM2NDAgNDIyLjc1IDY0MCAzNTJTNTgyLjc1IDIyNCA1MTIgMjI0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MjUuNTEzIDMyNi41MTJMMzc1LjM4NSA0OC43ODNDMzY5Ljc5NiAzOC40NDMgMzU4Ljk4OCAzMiAzNDcuMjM0IDMySDMwNEMyOTUuMTYzIDMyIDI4OCAzOS4xNjMgMjg4IDQ4VjY0QzI4OCA3Mi44MzcgMjk1LjE2MyA4MCAzMDQgODBIMzM3LjY4OEwzNzIuMjgxIDE0NEgyMjIuNDIyTDE5NS41OTQgMTA2LjEyNUMxOTEuMDk1IDk5Ljc3NCAxODMuNzk2IDk2IDE3Ni4wMTQgOTZIMTEyQzEwMy4xNjMgOTYgOTYgMTAzLjE2MyA5NiAxMTJWMTI4Qzk2IDEzNi44MzcgMTAzLjE2MyAxNDQgMTEyIDE0NEgxNjMuNTk0TDE4NS42MTcgMTc1LjA5NkwxMDYuNTMxIDMzMy4yNjZDMTAyLjgxMyAzNDAuNzAzIDEwMy4yMTkgMzQ5LjU0NyAxMDcuNTk0IDM1Ni42MjVDMTExLjk2OSAzNjMuNjg4IDExOS42ODggMzY4IDEyOCAzNjhIMzAzLjk4M0MzMTIuNDc1IDM2OCAzMjAuMzM2IDM2My41MTQgMzI0LjY1NiAzNTYuMjAzTDQwOS40MzQgMjEyLjczNEw0ODMuMjcgMzQ5LjMzN0M0ODcuNDcxIDM1Ny4xMDggNDk3LjE3NCAzNjAuMDA1IDUwNC45NDggMzU1LjgwOEw1MTkuMDM5IDM0OC4xOTlDNTI2LjgxOCAzNDMuOTk5IDUyOS43MTYgMzM0LjI4OCA1MjUuNTEzIDMyNi41MTJaTTIxNy4wODIgMjE5LjUyM0wyODguMjQ2IDMyMEgxNjYuODQ0TDIxNy4wODIgMjE5LjUyM1pNMzE2LjEzMyAyNzYuMjk3TDI1Ni40MjIgMTkySDM2NS45MzhMMzE2LjEzMyAyNzYuMjk3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bicycle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M128 424C88.203 424 56 391.797 56 352S88.203 280 128 280C129.686 280 131.262 280.381 132.918 280.494L159.053 228.223C149.061 225.723 138.771 224 128 224C57.25 224 0 281.25 0 352S57.25 480 128 480C193.268 480 246.449 431.096 254.391 368H198.08C190.795 400.057 162.277 424 128 424ZM512 224C498.529 224 485.801 226.648 473.611 230.498L500.971 281.109C504.592 280.549 508.221 280 512 280C551.797 280 584 312.203 584 352S551.797 424 512 424S440 391.797 440 352C440 333.432 447.203 316.688 458.725 303.926L431.363 253.307C402.676 276.77 384 312.004 384 352C384 422.75 441.25 480 512 480S640 422.75 640 352S582.75 224 512 224Z" />
            <path d="M525.513 326.512L375.385 48.783C369.796 38.443 358.988 32 347.234 32H304C295.163 32 288 39.163 288 48V64C288 72.837 295.163 80 304 80H337.688L372.281 144H222.422L195.594 106.125C191.095 99.774 183.796 96 176.014 96H112C103.163 96 96 103.163 96 112V128C96 136.837 103.163 144 112 144H163.594L185.617 175.096L106.531 333.266C102.813 340.703 103.219 349.547 107.594 356.625C111.969 363.688 119.688 368 128 368H303.983C312.475 368 320.336 363.514 324.656 356.203L409.434 212.734L483.27 349.337C487.471 357.108 497.174 360.005 504.948 355.808L519.039 348.199C526.818 343.999 529.716 334.288 525.513 326.512ZM217.082 219.523L288.246 320H166.844L217.082 219.523ZM316.133 276.297L256.422 192H365.938L316.133 276.297Z" />
        </Icon>
    </>
}