
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=light sprinkler}
 * @preview ![sprinkler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMjhDNy4xMjUgMTI4IDAgMTM1LjEyNSAwIDE0NFM3LjEyNSAxNjAgMTYgMTYwUzMyIDE1Mi44NzUgMzIgMTQ0UzI0Ljg3NSAxMjggMTYgMTI4Wk0xNiAyNTZDNy4xMjUgMjU2IDAgMjYzLjEyNSAwIDI3MlM3LjEyNSAyODggMTYgMjg4UzMyIDI4MC44NzUgMzIgMjcyUzI0Ljg3NSAyNTYgMTYgMjU2Wk0xNiAwQzcuMTI1IDAgMCA3LjEyNSAwIDE2UzcuMTI1IDMyIDE2IDMyUzMyIDI0Ljg3NSAzMiAxNlMyNC44NzUgMCAxNiAwWk04MCAxOTJDNzEuMTI1IDE5MiA2NCAxOTkuMTI1IDY0IDIwOFM3MS4xMjUgMjI0IDgwIDIyNFM5NiAyMTYuODc1IDk2IDIwOFM4OC44NzUgMTkyIDgwIDE5MlpNMzY4IDE2MEMzNzYuODc1IDE2MCAzODQgMTUyLjg3NSAzODQgMTQ0UzM3Ni44NzUgMTI4IDM2OCAxMjhTMzUyIDEzNS4xMjUgMzUyIDE0NFMzNTkuMTI1IDE2MCAzNjggMTYwWk0xNDQgMTYwQzE1Mi44NzUgMTYwIDE2MCAxNTIuODc1IDE2MCAxNDRTMTUyLjg3NSAxMjggMTQ0IDEyOFMxMjggMTM1LjEyNSAxMjggMTQ0UzEzNS4xMjUgMTYwIDE0NCAxNjBaTTQ5NiAzMkM1MDQuODc1IDMyIDUxMiAyNC44NzUgNTEyIDE2UzUwNC44NzUgMCA0OTYgMFM0ODAgNy4xMjUgNDgwIDE2UzQ4Ny4xMjUgMzIgNDk2IDMyWk00MzIgNjRDNDIzLjEyNSA2NCA0MTYgNzEuMTI1IDQxNiA4MFM0MjMuMTI1IDk2IDQzMiA5NlM0NDggODguODc1IDQ0OCA4MFM0NDAuODc1IDY0IDQzMiA2NFpNNDk2IDI1NkM0ODcuMTI1IDI1NiA0ODAgMjYzLjEyNSA0ODAgMjcyUzQ4Ny4xMjUgMjg4IDQ5NiAyODhTNTEyIDI4MC44NzUgNTEyIDI3MlM1MDQuODc1IDI1NiA0OTYgMjU2Wk04MCA2NEM3MS4xMjUgNjQgNjQgNzEuMTI1IDY0IDgwUzcxLjEyNSA5NiA4MCA5NlM5NiA4OC44NzUgOTYgODBTODguODc1IDY0IDgwIDY0Wk00OTYgMTI4QzQ4Ny4xMjUgMTI4IDQ4MCAxMzUuMTI1IDQ4MCAxNDRTNDg3LjEyNSAxNjAgNDk2IDE2MFM1MTIgMTUyLjg3NSA1MTIgMTQ0UzUwNC44NzUgMTI4IDQ5NiAxMjhaTTM5OC4yNSAyNTZIMjcyVjgwQzI3MiA3MS4xOTkgMjY0LjgwMSA2NCAyNTYgNjRTMjQwIDcxLjE5OSAyNDAgODBWMjU2SDExMy43NUMxMDcuMTI1IDI1NiAxMDAuODc1IDI1OS43NSA5Ny44NzUgMjY1Ljg3NUM5NC44NzUgMjcxLjg3NSA5NS41IDI3OSA5OS42MjUgMjg0LjVMMTkyIDM4Ny41VjQ5NkMxOTIgNTA0Ljc5OSAxOTkuMTk5IDUxMiAyMDggNTEyUzIyNCA1MDQuNzk5IDIyNCA0OTZWMzc0LjI1TDE0NC44NzUgMjg4SDM2Ny4xMjVMMjg4IDM3NC4yNVY0OTZDMjg4IDUwNC43OTkgMjk1LjE5OSA1MTIgMzA0IDUxMlMzMjAgNTA0Ljc5OSAzMjAgNDk2VjM4Ny41TDQxMi4zNzUgMjg0LjVDNDE2LjUgMjc5IDQxNy4xMjUgMjcxLjg3NSA0MTQuMTI1IDI2NS44NzVDNDExLjEyNSAyNTkuNzUgNDA0Ljg3NSAyNTYgMzk4LjI1IDI1NlpNNDMyIDE5MkM0MjMuMTI1IDE5MiA0MTYgMTk5LjEyNSA0MTYgMjA4UzQyMy4xMjUgMjI0IDQzMiAyMjRTNDQ4IDIxNi44NzUgNDQ4IDIwOFM0NDAuODc1IDE5MiA0MzIgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sprinkler(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 128C7.125 128 0 135.125 0 144S7.125 160 16 160S32 152.875 32 144S24.875 128 16 128ZM16 256C7.125 256 0 263.125 0 272S7.125 288 16 288S32 280.875 32 272S24.875 256 16 256ZM16 0C7.125 0 0 7.125 0 16S7.125 32 16 32S32 24.875 32 16S24.875 0 16 0ZM80 192C71.125 192 64 199.125 64 208S71.125 224 80 224S96 216.875 96 208S88.875 192 80 192ZM368 160C376.875 160 384 152.875 384 144S376.875 128 368 128S352 135.125 352 144S359.125 160 368 160ZM144 160C152.875 160 160 152.875 160 144S152.875 128 144 128S128 135.125 128 144S135.125 160 144 160ZM496 32C504.875 32 512 24.875 512 16S504.875 0 496 0S480 7.125 480 16S487.125 32 496 32ZM432 64C423.125 64 416 71.125 416 80S423.125 96 432 96S448 88.875 448 80S440.875 64 432 64ZM496 256C487.125 256 480 263.125 480 272S487.125 288 496 288S512 280.875 512 272S504.875 256 496 256ZM80 64C71.125 64 64 71.125 64 80S71.125 96 80 96S96 88.875 96 80S88.875 64 80 64ZM496 128C487.125 128 480 135.125 480 144S487.125 160 496 160S512 152.875 512 144S504.875 128 496 128ZM398.25 256H272V80C272 71.199 264.801 64 256 64S240 71.199 240 80V256H113.75C107.125 256 100.875 259.75 97.875 265.875C94.875 271.875 95.5 279 99.625 284.5L192 387.5V496C192 504.799 199.199 512 208 512S224 504.799 224 496V374.25L144.875 288H367.125L288 374.25V496C288 504.799 295.199 512 304 512S320 504.799 320 496V387.5L412.375 284.5C416.5 279 417.125 271.875 414.125 265.875C411.125 259.75 404.875 256 398.25 256ZM432 192C423.125 192 416 199.125 416 208S423.125 224 432 224S448 216.875 448 208S440.875 192 432 192Z" />
        </Icon>
    </>
}