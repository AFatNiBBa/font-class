
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=regular scarecrow}
 * @preview ![scarecrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDUuNzY1IDE4Ni4yNjlMNDE5LjI2NCAxNjAuMDIxTDQzNy42NCAxNDEuNzcyQzQ0Mi42NCAxMzYuNzcyIDQzOS4xNCAxMjguMDIzIDQzMS44OSAxMjguMDIzSDMyMC4wMTFMMzIwLjAxMSA5MC4zMjlDMzIwLjAxIDM5LjA3NCAyNzguMTA4IC0wLjg0MiAyMjYuODU1IDAuMDEzQzE0MS45ODYgMS40MyAxMjguMDA1IDg0LjUgMTI4LjAwNSAxMDMuMjY2TDEyOC4wMDQgMTI4LjAyM0gxNi4wMDFDOC44NzUgMTI4LjAyMyA1LjI1IDEzNi42NDcgMTAuMjUgMTQxLjc3MkwyOC43NTEgMTYwLjAyMUwyLjI1IDE4Ni4yNjlDLTAuNzUgMTg5LjM5NCAtMC43NSAxOTQuNTE5IDIuMjUgMTk3LjY0NEwyOC43NTEgMjI0LjAxN0wxMC4zNzUgMjQyLjI2NkM1LjM3NSAyNDcuMjY2IDguODc1IDI1Ni4wMTUgMTYuMTI2IDI1Ni4wMTVIMTIyLjI1NEw5Ni4yNTMgMzk3LjI1N0M5NC41MDMgNDA3LjYzMSAxMDIuNzU0IDQxNi4wMDYgMTEyLjAwNCA0MTYuMDA2QzExNC4zNzkgNDE2LjAwNiAxMTYuNzU0IDQxNS41MDYgMTE5LjI1NCA0MTQuMjU2TDE1MS44OCAzOTAuMTMyQzE2MC4yODQgMzg0LjI4NiAxNjcuNzYzIDM4OC4yNjEgMTY4Ljg4MSAzODguODgyTDIwMC4wMDcgNDA1LjUwNlY0ODguMDAxQzIwMC4wMDcgNTAxLjIwMSAyMTAuODA3IDUxMiAyMjQuMDA4IDUxMkgyMjQuMDA4QzIzNy4yMDggNTEyIDI0OC4wMDkgNTAxLjIwMSAyNDguMDA5IDQ4OC4wMDFWNDA1LjI1NkwyNzkuMTM1IDM4OC43NTdDMjgwLjI1MyAzODguMTEgMjg3LjY1NiAzODMuOTg0IDI5Ni4xMzUgMzg5Ljg4MkwzMjguNzYxIDQxNC4xMzFDMzMxLjI2MSA0MTUuMjU2IDMzMy42MzYgNDE1Ljc1NiAzMzYuMDEyIDQxNS43NTZDMzQ1LjI2MiA0MTUuNzU2IDM1My41MTIgNDA3LjM4MSAzNTEuNzYyIDM5Ny4xMzJMMzI1Ljg4NiAyNTYuMDE1SDQzMi4wMTVDNDM5LjE0IDI1Ni4wMTUgNDQyLjc2NSAyNDcuMzkxIDQzNy43NjUgMjQyLjI2Nkw0MTkuMjY0IDIyNC4wMTdMNDQ1LjY0IDE5Ny43NjlDNDQ4Ljc2NSAxOTQuNTE5IDQ0OC43NjUgMTg5LjUxOSA0NDUuNzY1IDE4Ni4yNjlaTTE3Ni4wMDYgMTAxLjM5OUMxNzYuMDA2IDEwMC43NzQgMTc2LjEzMSAxMDAuMjc0IDE3Ni4yNTYgOTkuNzc1QzE3OS41MDYgMTAyLjI3NCAxODMuNTA2IDEwNC4wMjQgMTg4LjAwNiAxMDQuMDI0QzE5OS4wMDcgMTA0LjAyNCAyMDguMDA3IDk1LjAyNSAyMDguMDA3IDg0LjAyNUMyMDguMDA3IDczLjUyNiAxOTkuODgyIDY1LjI3NyAxODkuNzU3IDY0LjI3N0MxOTguMTk2IDU0LjU0IDIxMC4xMTUgNDguMDI4IDIyNC4wMDggNDguMDI4QzI0Ni4wMDggNDguMDI4IDI2NC4yNTkgNjIuOTAyIDI3MC4wMDkgODMuMTUxQzI2Ny4wMDkgODEuMjc2IDI2My43NTkgODAuMDI2IDI2MC4wMDkgODAuMDI2QzI0OS4wMDkgODAuMDI2IDI0MC4wMDggODkuMDI1IDI0MC4wMDggMTAwLjAyNVMyNDkuMDA5IDEyMC4wMjMgMjYwLjAwOSAxMjAuMDIzQzI2NC42MzQgMTIwLjAyMyAyNjguNjM0IDExOC4yNzMgMjcyLjAwOSAxMTUuNjQ5VjEyOC4wMjNDMjcyLjAwOSAxMzYuNzcyIDI2NC43NTkgMTQ0LjAyMiAyNTYuMDA5IDE0NC4wMjJIMTkyLjAwN0MxODMuMjU2IDE0NC4wMjIgMTc2LjAwNiAxMzYuNzcyIDE3Ni4wMDYgMTI4LjAyM1YxMDEuMzk5Wk0zNjcuMzg4IDIwOC4wMThIMjY4LjI1OUwyNzguNjM1IDI2NC42NEwyOTIuMjYgMzM5LjEzNUMyNzkuODg1IDMzOC4wMTEgMjY3LjUwOSAzNDAuNTEgMjU2LjUwOSAzNDYuMzg1TDIyNC4wMDggMzYzLjc1OUwxOTEuNTA3IDM0Ni4zODVDMTgyLjI1NiAzNDEuNTEgMTcxLjg4MSAzMzguODg1IDE2MS4zODEgMzM4Ljg4NUMxNTkuNTA1IDMzOC44ODUgMTU3LjYzIDMzOS4wMSAxNTUuNzU1IDMzOS4xMzVMMTY5LjI1NiAyNjQuNjRMMTc5Ljc1NiAyMDcuODkzSDgwLjYyOEw2NC42MjcgMTkxLjg5NEw4MC42MjggMTc1Ljg5NUgxNTAuMTNDMTYxLjI1NiAxODUuNzY5IDE3NS44ODEgMTkxLjg5NCAxOTIuMDA3IDE5MS44OTRIMjU2LjAwOUMyNzIuMTM0IDE5MS44OTQgMjg2Ljc2IDE4NS43NjkgMjk3Ljg4NSAxNzUuODk1SDM2Ny4zODhMMzgzLjM4OCAxOTEuODk0TDM2Ny4zODggMjA4LjAxOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Scarecrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M445.765 186.269L419.264 160.021L437.64 141.772C442.64 136.772 439.14 128.023 431.89 128.023H320.011L320.011 90.329C320.01 39.074 278.108 -0.842 226.855 0.013C141.986 1.43 128.005 84.5 128.005 103.266L128.004 128.023H16.001C8.875 128.023 5.25 136.647 10.25 141.772L28.751 160.021L2.25 186.269C-0.75 189.394 -0.75 194.519 2.25 197.644L28.751 224.017L10.375 242.266C5.375 247.266 8.875 256.015 16.126 256.015H122.254L96.253 397.257C94.503 407.631 102.754 416.006 112.004 416.006C114.379 416.006 116.754 415.506 119.254 414.256L151.88 390.132C160.284 384.286 167.763 388.261 168.881 388.882L200.007 405.506V488.001C200.007 501.201 210.807 512 224.008 512H224.008C237.208 512 248.009 501.201 248.009 488.001V405.256L279.135 388.757C280.253 388.11 287.656 383.984 296.135 389.882L328.761 414.131C331.261 415.256 333.636 415.756 336.012 415.756C345.262 415.756 353.512 407.381 351.762 397.132L325.886 256.015H432.015C439.14 256.015 442.765 247.391 437.765 242.266L419.264 224.017L445.64 197.769C448.765 194.519 448.765 189.519 445.765 186.269ZM176.006 101.399C176.006 100.774 176.131 100.274 176.256 99.775C179.506 102.274 183.506 104.024 188.006 104.024C199.007 104.024 208.007 95.025 208.007 84.025C208.007 73.526 199.882 65.277 189.757 64.277C198.196 54.54 210.115 48.028 224.008 48.028C246.008 48.028 264.259 62.902 270.009 83.151C267.009 81.276 263.759 80.026 260.009 80.026C249.009 80.026 240.008 89.025 240.008 100.025S249.009 120.023 260.009 120.023C264.634 120.023 268.634 118.273 272.009 115.649V128.023C272.009 136.772 264.759 144.022 256.009 144.022H192.007C183.256 144.022 176.006 136.772 176.006 128.023V101.399ZM367.388 208.018H268.259L278.635 264.64L292.26 339.135C279.885 338.011 267.509 340.51 256.509 346.385L224.008 363.759L191.507 346.385C182.256 341.51 171.881 338.885 161.381 338.885C159.505 338.885 157.63 339.01 155.755 339.135L169.256 264.64L179.756 207.893H80.628L64.627 191.894L80.628 175.895H150.13C161.256 185.769 175.881 191.894 192.007 191.894H256.009C272.134 191.894 286.76 185.769 297.885 175.895H367.388L383.388 191.894L367.388 208.018Z" />
        </Icon>
    </>
}