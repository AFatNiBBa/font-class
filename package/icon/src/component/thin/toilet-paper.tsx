
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-paper` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper?s=thin toilet-paper}
 * @preview ![toilet-paper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQuMDA1IDBIMTMxLjk3NUM3NS4zMzcgMCAzMi4wMiA4NS4yMTkgMzIuMDIgMTk0VjM2MC43NUMzMi4wMiAzOTMuMzkxIDI0LjI5MiA0MTMuMDYyIDkuNjY3IDQ1Ni4xNDFMMS4yNiA0ODEuMDYyQy0zLjkxMyA0OTYuMTg2IDcuNDk5IDUxMiAyMy40NzkgNTEySDMwNi42MDRDMzIzLjQzMiA1MTIgMzM4LjMwNSA1MDEuMjgxIDM0My42MTggNDg1LjM1OUMzNTcuOTc1IDQ0Mi4yODcgMzY4LjAwOCA0MTEuMjExIDM2OC4wMDggMzYwLjc1VjE5MkMzNjguMDA4IDk0Ljk1MyA0MTEuMDY5IDE2IDQ2NC4wMDUgMTZTNTYwLjAwMSA5NC45NTMgNTYwLjAwMSAxOTJTNTE2Ljk0IDM2OCA0NjQuMDA1IDM2OEg0MTYuMDA3QzQxMS41ODUgMzY4IDQwOC4wMDcgMzcxLjU3OCA0MDguMDA3IDM3NlM0MTEuNTg1IDM4NCA0MTYuMDA3IDM4NEg0NjQuMDA1QzUyNS43NTMgMzg0IDU3Ni4wMDEgMjk3Ljg3NSA1NzYuMDAxIDE5MlM1MjUuNzUzIDAgNDY0LjAwNSAwWk0zNTIuMDA4IDE5MlYzNjAuNzVDMzUyLjAwOCA0MDkuOTM4IDM0MS41NzEgNDQxLjA3OCAzMjkuNDk1IDQ3Ny4xNDFDMzI0Ljg4NyA0OTAuNzU2IDMxNi41NTkgNDk2IDMwNi42MDQgNDk2SDIzLjQ3OUMxOC42NDkgNDk2IDE0LjcwNCA0OTEuMTg5IDE2LjQxNyA0ODYuMTg4TDI0LjgwNyA0NjEuMjgxQzM5LjU3MyA0MTcuODQ0IDQ4LjAyIDM5Ni4wMzEgNDguMDIgMzYwLjc1VjE5NEM0OC4wMiA5Ny41MTYgODUuODk5IDE2IDEzMS45NzUgMTZINDE5LjM4MkMzNzkuNzg2IDQ1LjYyNyAzNTIuMDA4IDExMy4zMiAzNTIuMDA4IDE5MlpNNTA0LjAwMyAxOTJDNTA0LjAwMyAxNTAuOTUzIDQ4Ni44MDEgMTIwIDQ2NC4wMDUgMTIwUzQyNC4wMDcgMTUwLjk1MyA0MjQuMDA3IDE5MlM0NDEuMjA4IDI2NCA0NjQuMDA1IDI2NFM1MDQuMDAzIDIzMy4wNDcgNTA0LjAwMyAxOTJaTTQ0MC4wMDUgMTkyQzQ0MC4wMDUgMTU5Ljk1MyA0NTIuNjc2IDEzNiA0NjQuMDA1IDEzNlM0ODguMDA1IDE1OS45NTMgNDg4LjAwNSAxOTJTNDc1LjMzMyAyNDggNDY0LjAwNSAyNDhTNDQwLjAwNSAyMjQuMDQ3IDQ0MC4wMDUgMTkyWk0xNjAuMDAxIDIyNEMxNjguODM3IDIyNCAxNzYuMDAxIDIxNi44MzYgMTc2LjAwMSAyMDhDMTc2LjAwMSAxOTkuMTYyIDE2OC44MzcgMTkyIDE2MC4wMDEgMTkyUzE0NC4wMDEgMTk5LjE2MiAxNDQuMDAxIDIwOEMxNDQuMDAxIDIxNi44MzYgMTUxLjE2NSAyMjQgMTYwLjAwMSAyMjRaTTIyNC4wMDEgMjI0QzIzMi44MzcgMjI0IDI0MC4wMDEgMjE2LjgzNiAyNDAuMDAxIDIwOEMyNDAuMDAxIDE5OS4xNjIgMjMyLjgzNyAxOTIgMjI0LjAwMSAxOTJTMjA4LjAwMSAxOTkuMTYyIDIwOC4wMDEgMjA4QzIwOC4wMDEgMjE2LjgzNiAyMTUuMTY1IDIyNCAyMjQuMDAxIDIyNFpNMjg4LjAwMSAyMjRDMjk2LjgzNyAyMjQgMzA0LjAwMSAyMTYuODM2IDMwNC4wMDEgMjA4QzMwNC4wMDEgMTk5LjE2MiAyOTYuODM3IDE5MiAyODguMDAxIDE5MlMyNzIuMDAxIDE5OS4xNjIgMjcyLjAwMSAyMDhDMjcyLjAwMSAyMTYuODM2IDI3OS4xNjUgMjI0IDI4OC4wMDEgMjI0Wk05Ni4wMDEgMTkyQzg3LjE2NSAxOTIgODAuMDAxIDE5OS4xNjIgODAuMDAxIDIwOEM4MC4wMDEgMjE2LjgzNiA4Ny4xNjUgMjI0IDk2LjAwMSAyMjRTMTEyLjAwMSAyMTYuODM2IDExMi4wMDEgMjA4QzExMi4wMDEgMTk5LjE2MiAxMDQuODM3IDE5MiA5Ni4wMDEgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ToiletPaper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M464.005 0H131.975C75.337 0 32.02 85.219 32.02 194V360.75C32.02 393.391 24.292 413.062 9.667 456.141L1.26 481.062C-3.913 496.186 7.499 512 23.479 512H306.604C323.432 512 338.305 501.281 343.618 485.359C357.975 442.287 368.008 411.211 368.008 360.75V192C368.008 94.953 411.069 16 464.005 16S560.001 94.953 560.001 192S516.94 368 464.005 368H416.007C411.585 368 408.007 371.578 408.007 376S411.585 384 416.007 384H464.005C525.753 384 576.001 297.875 576.001 192S525.753 0 464.005 0ZM352.008 192V360.75C352.008 409.938 341.571 441.078 329.495 477.141C324.887 490.756 316.559 496 306.604 496H23.479C18.649 496 14.704 491.189 16.417 486.188L24.807 461.281C39.573 417.844 48.02 396.031 48.02 360.75V194C48.02 97.516 85.899 16 131.975 16H419.382C379.786 45.627 352.008 113.32 352.008 192ZM504.003 192C504.003 150.953 486.801 120 464.005 120S424.007 150.953 424.007 192S441.208 264 464.005 264S504.003 233.047 504.003 192ZM440.005 192C440.005 159.953 452.676 136 464.005 136S488.005 159.953 488.005 192S475.333 248 464.005 248S440.005 224.047 440.005 192ZM160.001 224C168.837 224 176.001 216.836 176.001 208C176.001 199.162 168.837 192 160.001 192S144.001 199.162 144.001 208C144.001 216.836 151.165 224 160.001 224ZM224.001 224C232.837 224 240.001 216.836 240.001 208C240.001 199.162 232.837 192 224.001 192S208.001 199.162 208.001 208C208.001 216.836 215.165 224 224.001 224ZM288.001 224C296.837 224 304.001 216.836 304.001 208C304.001 199.162 296.837 192 288.001 192S272.001 199.162 272.001 208C272.001 216.836 279.165 224 288.001 224ZM96.001 192C87.165 192 80.001 199.162 80.001 208C80.001 216.836 87.165 224 96.001 224S112.001 216.836 112.001 208C112.001 199.162 104.837 192 96.001 192Z" />
        </Icon>
    </>
}