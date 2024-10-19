
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `faucet-drip` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/faucet-drip?s=duotone faucet-drip}
 * @preview ![faucet-drip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAxOTJIMzEzLjZDMjk3LjYgMTc5LjE5OSAyNzguNCAxNjkuNiAyNTYgMTYzLjE5OVYxMTUuMTk5TDIyNCAxMTJMMTkyIDExNS4xOTlWMTYzLjE5OUMxNjkuNiAxNjkuNiAxNTAuNCAxNzkuMTk5IDEzNC40IDE5MkgxNkM2LjQgMTkyIDAgMTk4LjQgMCAyMDhWMzA0QzAgMzEzLjYgNi40IDMyMCAxNiAzMjBIMTA4LjgwMUMxMjggMzU4LjQgMTcyLjgwMSAzODQgMjI0IDM4NFMzMjAgMzU4LjQgMzM5LjE5OSAzMjBIMzUyQzM3MS4xOTkgMzIwIDM4NCAzMzIuNzk5IDM4NCAzNTJDMzg0IDM3MS4xOTkgMzk2LjgwMSAzODQgNDE2IDM4NEg0ODBDNDk5LjE5OSAzODQgNTEyIDM3MS4xOTkgNTEyIDM1MkM1MTIgMjYyLjQgNDQxLjYgMTkyIDM1MiAxOTJaTTI1NiA0NC43OTlWMTZDMjU2IDYuNCAyNDkuNiAwIDI0MCAwSDIwOEMxOTguNCAwIDE5MiA2LjQgMTkyIDE2VjQ0Ljc5OUwyMjQgNDhMMjU2IDQ0Ljc5OVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzY0LjgwMSAzMkwyMjQgNDhMODMuMTk5IDMyQzczLjYgMzIgNjQgMzguNCA2NCA0OFY3Ni43OTlDNjQgODkuNiA3My42IDk2IDgzLjE5OSA5NkwyMjQgODBMMzY0LjgwMSA5NkMzNzQuNCA5NiAzODQgODkuNiAzODQgODBWNDhDMzg0IDM4LjQgMzc0LjQgMzIgMzY0LjgwMSAzMlpNNDQ4IDQxNkM0NDggNDE2IDQxNiA0NjAuNzk5IDQxNiA0ODBDNDE2IDQ5OS4xOTkgNDI4LjgwMSA1MTIgNDQ4IDUxMlM0ODAgNDk5LjE5OSA0ODAgNDgwQzQ4MCA0NjAuNzk5IDQ0OCA0MTYgNDQ4IDQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FaucetDrip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M352 192H313.6C297.6 179.199 278.4 169.6 256 163.199V115.199L224 112L192 115.199V163.199C169.6 169.6 150.4 179.199 134.4 192H16C6.4 192 0 198.4 0 208V304C0 313.6 6.4 320 16 320H108.801C128 358.4 172.801 384 224 384S320 358.4 339.199 320H352C371.199 320 384 332.799 384 352C384 371.199 396.801 384 416 384H480C499.199 384 512 371.199 512 352C512 262.4 441.6 192 352 192ZM256 44.799V16C256 6.4 249.6 0 240 0H208C198.4 0 192 6.4 192 16V44.799L224 48L256 44.799Z" />
            <path d="M364.801 32L224 48L83.199 32C73.6 32 64 38.4 64 48V76.799C64 89.6 73.6 96 83.199 96L224 80L364.801 96C374.4 96 384 89.6 384 80V48C384 38.4 374.4 32 364.801 32ZM448 416C448 416 416 460.799 416 480C416 499.199 428.801 512 448 512S480 499.199 480 480C480 460.799 448 416 448 416Z" />
        </Icon>
    </>
}