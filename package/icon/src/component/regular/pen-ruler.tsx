
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=regular pen-ruler}
 * @preview ![pen-ruler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzUuMjcgMjcyLjYyN0w0MDEuMzI1IDMwNi41NjZMNDE2Ljc2OCAzMjIuMDFMMzg1LjQwMyAzNTMuMzc1QzM3OS4xNTMgMzU5LjYyNSAzNzkuMTUzIDM2OS43NSAzODUuNDAzIDM3NkMzODguNTI4IDM3OS4xMjUgMzkyLjYyMSAzODAuNjg4IDM5Ni43MTUgMzgwLjY4OFM0MDQuOTAzIDM3OS4xMjUgNDA4LjAyOCAzNzZMNDM5LjM5MyAzNDQuNjM1TDQ2My43MTMgMzY4Ljk1M0M0NjQuMTM1IDM2OS4zNzUgNDY0LjEzNSAzNzAuMzQgNDYzLjcxMSAzNzAuNzY0TDM3MC43OTEgNDYzLjY4NEgzNjguOTgxTDMwNi41OSA0MDEuMjkzTDI3Mi42NDcgNDM1LjIzMkwzMzUuMDM5IDQ5Ny42MjVDMzQ0LjYyMSA1MDcuMjA3IDM1Ny4yNTQgNTEyIDM2OS44ODUgNTEyQzM4Mi41MTggNTEyIDM5NS4xNDkgNTA3LjIwNyA0MDQuNzMxIDQ5Ny42MjVMNDk3LjY1NSA0MDQuNzAzQzUxNi44MTkgMzg1LjUzNyA1MTYuODE5IDM1NC4xNzggNDk3LjY1NSAzMzUuMDEyTDQzNS4yNyAyNzIuNjI3Wk03Ni43NzIgMjM5LjM1N0wxMTAuNzExIDIwNS40MTRMNDguMzQyIDE0My4wNDVDNDcuOTIgMTQyLjYyMyA0Ny45MiAxNDEuNjU4IDQ4LjM0NCAxNDEuMjM0TDE0MS4yNjQgNDguMzE0TDE0Mi4xNjggNDhDMTQyLjc1OCA0OCAxNDIuOTgxIDQ4LjIyMSAxNDMuMDc1IDQ4LjMxNkwxNjcuMzkzIDcyLjYzNUwxMzYuMDI4IDEwNEMxMjkuNzc4IDExMC4yNSAxMjkuNzc4IDEyMC4zNzUgMTM2LjAyOCAxMjYuNjI1QzEzOS4xNTMgMTI5Ljc1IDE0My4yNDYgMTMxLjMxMiAxNDcuMzQgMTMxLjMxMlMxNTUuNTI4IDEyOS43NSAxNTguNjUzIDEyNi42MjVMMTkwLjAxOCA5NS4yNkwyMDUuNDM0IDExMC42NzZMMjM5LjM3MyA3Ni43MzJMMTc3LjAxNCAxNC4zNzNDMTY3LjQzMiA0Ljc5MSAxNTQuODAxIDAgMTQyLjE2OCAwQzEyOS41MzcgMCAxMTYuOTA1IDQuNzkxIDEwNy4zMjMgMTQuMzczTDE0LjQwMSAxMDcuMjk1Qy00Ljc2MyAxMjYuNDYxIC00Ljc2MyAxNTcuODIgMTQuNDAxIDE3Ni45ODZMNzYuNzcyIDIzOS4zNTdaTTQ5My4yNTQgNTYuMjYyTDQ1NS43NDMgMTguNzQ4QzQ0My4yNDYgNi4yNTIgNDI2Ljg2NiAwIDQxMC40ODcgMEMzOTQuMTA0IDAgMzc3LjcyNyA2LjI1IDM2NS4yMjcgMTguNzVMNDUuMTE0IDMzOC44ODVDMzYuNTQ1IDM0Ny40NTEgMzAuNTg2IDM1OC4yNzUgMjcuOTI4IDM3MC4wOTRMMC4zMTkgNDkyLjg1NEMtMS43MDEgNTAyLjk2NyA2LjE1OSA1MTIgMTUuOTQ4IDUxMkMxNi45OTQgNTEyIDE4LjA2MyA1MTEuODk2IDE5LjE0NSA1MTEuNjhDMTkuMTQ1IDUxMS42OCAxMDMuNzU4IDQ5My43MyAxNDEuOTA1IDQ4NC43NDhDMTUzLjQ0NCA0ODIuMDMxIDE2My43NzIgNDc2LjIyNSAxNzIuMTUzIDQ2Ny44NDRDMjIxLjI4MiA0MTguNzE5IDQwNi42ODQgMjMzLjMzIDQ5My4zNDQgMTQ2LjY3NkM1MTguMzM4IDEyMS42ODQgNTE4LjI0NiA4MS4yNTYgNDkzLjI1NCA1Ni4yNjJaTTEzOC4yMTEgNDMzLjkwMkMxMzYuMDk2IDQzNi4wMTggMTMzLjcwNyA0MzcuMzY1IDEzMC45MDMgNDM4LjAyNUMxMTIuNzI3IDQ0Mi4zMDcgODMuNDM4IDQ0OC43MzggNTguMjA3IDQ1NC4yMDNMNzQuNzU2IDM4MC42MjdDNzUuNDIyIDM3Ny42NjggNzYuOTA3IDM3NC45NzMgNzkuMDUzIDM3Mi44MjRMMzEyLjk3NyAxMzguODg3TDM3My4xMSAxOTkuMDJMMTM4LjIxMSA0MzMuOTAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenRuler(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M435.27 272.627L401.325 306.566L416.768 322.01L385.403 353.375C379.153 359.625 379.153 369.75 385.403 376C388.528 379.125 392.621 380.688 396.715 380.688S404.903 379.125 408.028 376L439.393 344.635L463.713 368.953C464.135 369.375 464.135 370.34 463.711 370.764L370.791 463.684H368.981L306.59 401.293L272.647 435.232L335.039 497.625C344.621 507.207 357.254 512 369.885 512C382.518 512 395.149 507.207 404.731 497.625L497.655 404.703C516.819 385.537 516.819 354.178 497.655 335.012L435.27 272.627ZM76.772 239.357L110.711 205.414L48.342 143.045C47.92 142.623 47.92 141.658 48.344 141.234L141.264 48.314L142.168 48C142.758 48 142.981 48.221 143.075 48.316L167.393 72.635L136.028 104C129.778 110.25 129.778 120.375 136.028 126.625C139.153 129.75 143.246 131.312 147.34 131.312S155.528 129.75 158.653 126.625L190.018 95.26L205.434 110.676L239.373 76.732L177.014 14.373C167.432 4.791 154.801 0 142.168 0C129.537 0 116.905 4.791 107.323 14.373L14.401 107.295C-4.763 126.461 -4.763 157.82 14.401 176.986L76.772 239.357ZM493.254 56.262L455.743 18.748C443.246 6.252 426.866 0 410.487 0C394.104 0 377.727 6.25 365.227 18.75L45.114 338.885C36.545 347.451 30.586 358.275 27.928 370.094L0.319 492.854C-1.701 502.967 6.159 512 15.948 512C16.994 512 18.063 511.896 19.145 511.68C19.145 511.68 103.758 493.73 141.905 484.748C153.444 482.031 163.772 476.225 172.153 467.844C221.282 418.719 406.684 233.33 493.344 146.676C518.338 121.684 518.246 81.256 493.254 56.262ZM138.211 433.902C136.096 436.018 133.707 437.365 130.903 438.025C112.727 442.307 83.438 448.738 58.207 454.203L74.756 380.627C75.422 377.668 76.907 374.973 79.053 372.824L312.977 138.887L373.11 199.02L138.211 433.902Z" />
        </Icon>
    </>
}