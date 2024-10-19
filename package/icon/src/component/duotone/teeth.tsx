
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `teeth` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/teeth?s=duotone teeth}
 * @preview ![teeth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyODhINjRDNTUuMTI1IDI4OCA0OCAyOTUuMTI1IDQ4IDMwNFYzMzZDNDggMzYyLjUgNjkuNSAzODQgOTYgMzg0UzE0NCAzNjIuNSAxNDQgMzM2VjMwNEMxNDQgMjk1LjEyNSAxMzYuODc1IDI4OCAxMjggMjg4Wk05NiAxNjBDNjkuNSAxNjAgNDggMTgxLjUgNDggMjA4VjI0MEM0OCAyNDguODc1IDU1LjEyNSAyNTYgNjQgMjU2SDEyOEMxMzYuODc1IDI1NiAxNDQgMjQ4Ljg3NSAxNDQgMjQwVjIwOEMxNDQgMTgxLjUgMTIyLjUgMTYwIDk2IDE2MFpNMjU2IDI4OEgxOTJDMTgzLjEyNSAyODggMTc2IDI5NS4xMjUgMTc2IDMwNFYzMzZDMTc2IDM2Mi41IDE5Ny41IDM4NCAyMjQgMzg0UzI3MiAzNjIuNSAyNzIgMzM2VjMwNEMyNzIgMjk1LjEyNSAyNjQuODc1IDI4OCAyNTYgMjg4Wk0yMjQgMTI4QzE5Ny41MzUgMTI4IDE3NiAxNDkuNTM1IDE3NiAxNzZWMjQyLjI4NUMxNzYgMjQ5Ljg5MyAxODIuMTA3IDI1NiAxODkuNzE1IDI1NkgyNTguMjg1QzI2NS44OTMgMjU2IDI3MiAyNDkuODkzIDI3MiAyNDIuMjg1VjE3NkMyNzIgMTQ5LjUzNSAyNTAuNDY1IDEyOCAyMjQgMTI4Wk0zODQgMjg4SDMyMEMzMTEuMTI1IDI4OCAzMDQgMjk1LjEyNSAzMDQgMzA0VjMzNkMzMDQgMzYyLjUgMzI1LjUgMzg0IDM1MiAzODRTNDAwIDM2Mi41IDQwMCAzMzZWMzA0QzQwMCAyOTUuMTI1IDM5Mi44NzUgMjg4IDM4NCAyODhaTTM1MiAxMjhDMzI1LjUzNSAxMjggMzA0IDE0OS41MzUgMzA0IDE3NlYyNDIuMjg1QzMwNCAyNDkuODkzIDMxMC4xMDcgMjU2IDMxNy43MTUgMjU2SDM4Ni4yODVDMzkzLjg5MyAyNTYgNDAwIDI0OS44OTMgNDAwIDI0Mi4yODVWMTc2QzQwMCAxNDkuNTM1IDM3OC40NjUgMTI4IDM1MiAxMjhaTTUxMiAyODhINDQ4QzQzOS4xMjUgMjg4IDQzMiAyOTUuMTI1IDQzMiAzMDRWMzM2QzQzMiAzNjIuNSA0NTMuNSAzODQgNDgwIDM4NFM1MjggMzYyLjUgNTI4IDMzNlYzMDRDNTI4IDI5NS4xMjUgNTIwLjg3NSAyODggNTEyIDI4OFpNNDgwIDE2MEM0NTMuNSAxNjAgNDMyIDE4MS41IDQzMiAyMDhWMjQwQzQzMiAyNDguODc1IDQzOS4xMjUgMjU2IDQ0OCAyNTZINTEyQzUyMC44NzUgMjU2IDUyOCAyNDguODc1IDUyOCAyNDBWMjA4QzUyOCAxODEuNSA1MDYuNSAxNjAgNDgwIDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDgwIDMySDk2QzQyLjk4IDMyIDAgNzQuOTggMCAxMjhWMzg0QzAgNDM3LjAyIDQyLjk4IDQ4MCA5NiA0ODBINDgwQzUzMy4wMiA0ODAgNTc2IDQzNy4wMiA1NzYgMzg0VjEyOEM1NzYgNzQuOTggNTMzLjAyIDMyIDQ4MCAzMlpNMTQ0IDMzNkMxNDQgMzYyLjUgMTIyLjUgMzg0IDk2IDM4NFM0OCAzNjIuNSA0OCAzMzZWMzA0QzQ4IDI5NS4xMjUgNTUuMTI1IDI4OCA2NCAyODhIMTI4QzEzNi44NzUgMjg4IDE0NCAyOTUuMTI1IDE0NCAzMDRWMzM2Wk0xNDQgMjQwQzE0NCAyNDguODc1IDEzNi44NzUgMjU2IDEyOCAyNTZINjRDNTUuMTI1IDI1NiA0OCAyNDguODc1IDQ4IDI0MFYyMDhDNDggMTgxLjUgNjkuNSAxNjAgOTYgMTYwUzE0NCAxODEuNSAxNDQgMjA4VjI0MFpNMjcyIDMzNkMyNzIgMzYyLjUgMjUwLjUgMzg0IDIyNCAzODRTMTc2IDM2Mi41IDE3NiAzMzZWMzA0QzE3NiAyOTUuMTI1IDE4My4xMjUgMjg4IDE5MiAyODhIMjU2QzI2NC44NzUgMjg4IDI3MiAyOTUuMTI1IDI3MiAzMDRWMzM2Wk0yNzIgMjQyLjI4NUMyNzIgMjQ5Ljg5MyAyNjUuODkzIDI1NiAyNTguMjg1IDI1NkgxODkuNzE1QzE4Mi4xMDcgMjU2IDE3NiAyNDkuODkzIDE3NiAyNDIuMjg1VjE3NkMxNzYgMTQ5LjUzNSAxOTcuNTM1IDEyOCAyMjQgMTI4UzI3MiAxNDkuNTM1IDI3MiAxNzZWMjQyLjI4NVpNNDAwIDMzNkM0MDAgMzYyLjUgMzc4LjUgMzg0IDM1MiAzODRTMzA0IDM2Mi41IDMwNCAzMzZWMzA0QzMwNCAyOTUuMTI1IDMxMS4xMjUgMjg4IDMyMCAyODhIMzg0QzM5Mi44NzUgMjg4IDQwMCAyOTUuMTI1IDQwMCAzMDRWMzM2Wk00MDAgMjQyLjI4NUM0MDAgMjQ5Ljg5MyAzOTMuODkzIDI1NiAzODYuMjg1IDI1NkgzMTcuNzE1QzMxMC4xMDcgMjU2IDMwNCAyNDkuODkzIDMwNCAyNDIuMjg1VjE3NkMzMDQgMTQ5LjUzNSAzMjUuNTM1IDEyOCAzNTIgMTI4UzQwMCAxNDkuNTM1IDQwMCAxNzZWMjQyLjI4NVpNNTI4IDMzNkM1MjggMzYyLjUgNTA2LjUgMzg0IDQ4MCAzODRTNDMyIDM2Mi41IDQzMiAzMzZWMzA0QzQzMiAyOTUuMTI1IDQzOS4xMjUgMjg4IDQ0OCAyODhINTEyQzUyMC44NzUgMjg4IDUyOCAyOTUuMTI1IDUyOCAzMDRWMzM2Wk01MjggMjQwQzUyOCAyNDguODc1IDUyMC44NzUgMjU2IDUxMiAyNTZINDQ4QzQzOS4xMjUgMjU2IDQzMiAyNDguODc1IDQzMiAyNDBWMjA4QzQzMiAxODEuNSA0NTMuNSAxNjAgNDgwIDE2MFM1MjggMTgxLjUgNTI4IDIwOFYyNDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Teeth(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M128 288H64C55.125 288 48 295.125 48 304V336C48 362.5 69.5 384 96 384S144 362.5 144 336V304C144 295.125 136.875 288 128 288ZM96 160C69.5 160 48 181.5 48 208V240C48 248.875 55.125 256 64 256H128C136.875 256 144 248.875 144 240V208C144 181.5 122.5 160 96 160ZM256 288H192C183.125 288 176 295.125 176 304V336C176 362.5 197.5 384 224 384S272 362.5 272 336V304C272 295.125 264.875 288 256 288ZM224 128C197.535 128 176 149.535 176 176V242.285C176 249.893 182.107 256 189.715 256H258.285C265.893 256 272 249.893 272 242.285V176C272 149.535 250.465 128 224 128ZM384 288H320C311.125 288 304 295.125 304 304V336C304 362.5 325.5 384 352 384S400 362.5 400 336V304C400 295.125 392.875 288 384 288ZM352 128C325.535 128 304 149.535 304 176V242.285C304 249.893 310.107 256 317.715 256H386.285C393.893 256 400 249.893 400 242.285V176C400 149.535 378.465 128 352 128ZM512 288H448C439.125 288 432 295.125 432 304V336C432 362.5 453.5 384 480 384S528 362.5 528 336V304C528 295.125 520.875 288 512 288ZM480 160C453.5 160 432 181.5 432 208V240C432 248.875 439.125 256 448 256H512C520.875 256 528 248.875 528 240V208C528 181.5 506.5 160 480 160Z" />
            <path d="M480 32H96C42.98 32 0 74.98 0 128V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V128C576 74.98 533.02 32 480 32ZM144 336C144 362.5 122.5 384 96 384S48 362.5 48 336V304C48 295.125 55.125 288 64 288H128C136.875 288 144 295.125 144 304V336ZM144 240C144 248.875 136.875 256 128 256H64C55.125 256 48 248.875 48 240V208C48 181.5 69.5 160 96 160S144 181.5 144 208V240ZM272 336C272 362.5 250.5 384 224 384S176 362.5 176 336V304C176 295.125 183.125 288 192 288H256C264.875 288 272 295.125 272 304V336ZM272 242.285C272 249.893 265.893 256 258.285 256H189.715C182.107 256 176 249.893 176 242.285V176C176 149.535 197.535 128 224 128S272 149.535 272 176V242.285ZM400 336C400 362.5 378.5 384 352 384S304 362.5 304 336V304C304 295.125 311.125 288 320 288H384C392.875 288 400 295.125 400 304V336ZM400 242.285C400 249.893 393.893 256 386.285 256H317.715C310.107 256 304 249.893 304 242.285V176C304 149.535 325.535 128 352 128S400 149.535 400 176V242.285ZM528 336C528 362.5 506.5 384 480 384S432 362.5 432 336V304C432 295.125 439.125 288 448 288H512C520.875 288 528 295.125 528 304V336ZM528 240C528 248.875 520.875 256 512 256H448C439.125 256 432 248.875 432 240V208C432 181.5 453.5 160 480 160S528 181.5 528 208V240Z" />
        </Icon>
    </>
}