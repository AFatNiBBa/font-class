
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hands-holding-heart` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-heart?s=solid hands-holding-heart}
 * @preview ![hands-holding-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzYgMTcuNTNDNDA1LjI1IC05LjIyMSAzNTkuMjUgLTQuMzQ2IDMzMS4xMjUgMjUuMjhMMzIwIDM2LjkwNUwzMDguODc1IDI1LjI4QzI4MC43NSAtNC4zNDYgMjM0Ljc1IC05LjIyMSAyMDQgMTcuNTNDMTY4Ljc1IDQ4LjE1NSAxNjYuNzUgMTAzLjE1NSAxOTguMzc1IDEzNi4yOEwzMDcuMjUgMjUwLjUzQzMxNC4yNSAyNTcuOTA1IDMyNS43NSAyNTcuOTA1IDMzMi43NSAyNTAuNTNMNDQxLjc1IDEzNi4yOEM0NzMuMjUgMTAzLjE1NSA0NzEuMzc1IDQ4LjE1NSA0MzYgMTcuNTNaTTIxNi45ODQgMjM1Ljk5OUMyMDUuOTUzIDIyMi4yNDkgMTg1Ljc4MSAyMTkuOTY4IDE3Mi4wMTYgMjMwLjk5OUMxNTguMjAzIDI0Mi4wNjIgMTU1Ljk2OSAyNjIuMTg3IDE2Ny4wMTYgMjc1Ljk5OUwxODUuODczIDMwNi41NjJDMTk0Ljc3MyAzMTcuNjk1IDE5My44ODMgMzMzLjczNCAxODMuODA3IDM0My44MDRDMTcyLjAyMSAzNTUuNTkzIDE1Mi42MDcgMzU0LjUxNSAxNDIuMTk1IDM0MS40OTlMODAgMjU2Ljc2NVYxMDMuOTk5QzgwIDgxLjkwNSA2Mi4wOTIgNjMuOTk4IDQwIDYzLjk5OFMwIDgxLjkwNSAwIDEwMy45OTlWMzA4Ljc0NUMwIDMyMy4yODggNC45NDkgMzM3LjM5NCAxNC4wMzEgMzQ4Ljc0OUwxMzUuMDE2IDUwMEMxNDEuMDgyIDUwNy41ODYgMTUwLjI2OCA1MTIgMTU5Ljk4IDUxMkgyNTZDMjczLjY3NCA1MTIgMjg4IDQ5Ny42NzIgMjg4IDQ4MFYzNTguNDM3QzI4OCAzMzYuNjQ4IDI4MC41ODYgMzE1LjUxMSAyNjYuOTc3IDI5OC40OTlMMjE2Ljk4NCAyMzUuOTk5Wk02MDAgNjMuOTk4QzU3Ny45MDggNjMuOTk4IDU2MCA4MS45MDUgNTYwIDEwMy45OTlWMjU2Ljc2NUw0OTcuODA1IDM0MS40OTlDNDg3LjM5MyAzNTQuNTE1IDQ2Ny45NzkgMzU1LjU5MyA0NTYuMTkzIDM0My44MDRDNDQ2LjExNyAzMzMuNzM0IDQ0NS4yMjcgMzE3LjY5NSA0NTQuMTI3IDMwNi41NjJMNDcyLjk4NCAyNzUuOTk5QzQ4NC4wMzEgMjYyLjE4NyA0ODEuNzk3IDI0Mi4wNjIgNDY3Ljk4NCAyMzAuOTk5QzQ1NC4yMTkgMjE5Ljk2OCA0MzQuMDQ3IDIyMi4yNDkgNDIzLjAxNiAyMzUuOTk5TDM3My4wMjMgMjk4LjQ5OUMzNTkuNDE0IDMxNS41MTEgMzUyIDMzNi42NDggMzUyIDM1OC40MzdWNDgwQzM1MiA0OTcuNjcyIDM2Ni4zMjYgNTEyIDM4NCA1MTJINDgwLjAyQzQ4OS43MzIgNTEyIDQ5OC45MTggNTA3LjU4NiA1MDQuOTg0IDUwMEw2MjUuOTY5IDM0OC43NDlDNjM1LjA1MSAzMzcuMzk0IDY0MCAzMjMuMjg4IDY0MCAzMDguNzQ1VjEwMy45OTlDNjQwIDgxLjkwNSA2MjIuMDkyIDYzLjk5OCA2MDAgNjMuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandsHoldingHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M436 17.53C405.25 -9.221 359.25 -4.346 331.125 25.28L320 36.905L308.875 25.28C280.75 -4.346 234.75 -9.221 204 17.53C168.75 48.155 166.75 103.155 198.375 136.28L307.25 250.53C314.25 257.905 325.75 257.905 332.75 250.53L441.75 136.28C473.25 103.155 471.375 48.155 436 17.53ZM216.984 235.999C205.953 222.249 185.781 219.968 172.016 230.999C158.203 242.062 155.969 262.187 167.016 275.999L185.873 306.562C194.773 317.695 193.883 333.734 183.807 343.804C172.021 355.593 152.607 354.515 142.195 341.499L80 256.765V103.999C80 81.905 62.092 63.998 40 63.998S0 81.905 0 103.999V308.745C0 323.288 4.949 337.394 14.031 348.749L135.016 500C141.082 507.586 150.268 512 159.98 512H256C273.674 512 288 497.672 288 480V358.437C288 336.648 280.586 315.511 266.977 298.499L216.984 235.999ZM600 63.998C577.908 63.998 560 81.905 560 103.999V256.765L497.805 341.499C487.393 354.515 467.979 355.593 456.193 343.804C446.117 333.734 445.227 317.695 454.127 306.562L472.984 275.999C484.031 262.187 481.797 242.062 467.984 230.999C454.219 219.968 434.047 222.249 423.016 235.999L373.023 298.499C359.414 315.511 352 336.648 352 358.437V480C352 497.672 366.326 512 384 512H480.02C489.732 512 498.918 507.586 504.984 500L625.969 348.749C635.051 337.394 640 323.288 640 308.745V103.999C640 81.905 622.092 63.998 600 63.998Z" />
        </Icon>
    </>
}