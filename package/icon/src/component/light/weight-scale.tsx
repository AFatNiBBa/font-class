
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=light weight-scale}
 * @preview ![weight-scale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRIMzgzLjI1QzM1NCAyNS4zNzUgMzA4LjEyNSAwIDI1NiAwUzE1OCAyNS4zNzUgMTI4Ljc1IDY0SDY0QzI4Ljc1IDY0IDAgOTIuNzUgMCAxMjhWNDQ4QzAgNDgzLjI1IDI4Ljc1IDUxMiA2NCA1MTJINDQ4QzQ4My4yNSA1MTIgNTEyIDQ4My4yNSA1MTIgNDQ4VjEyOEM1MTIgOTIuNzUgNDgzLjI1IDY0IDQ0OCA2NFpNMjU2IDMyQzMyNi43NSAzMiAzODQgODkuMjUgMzg0IDE2MFMzMjYuNzUgMjg4IDI1NiAyODhTMTI4IDIzMC43NSAxMjggMTYwUzE4NS4yNSAzMiAyNTYgMzJaTTQ4MCA0NDhDNDgwIDQ2NS42MjUgNDY1LjYyNSA0ODAgNDQ4IDQ4MEg2NEM0Ni4zNzUgNDgwIDMyIDQ2NS42MjUgMzIgNDQ4VjEyOEMzMiAxMTAuMzc1IDQ2LjM3NSA5NiA2NCA5NkgxMDkuNUMxMDEgMTE1LjYyNSA5NiAxMzcuMjUgOTYgMTYwQzk2IDI0OC4yNSAxNjcuNzUgMzIwIDI1NiAzMjBTNDE2IDI0OC4yNSA0MTYgMTYwQzQxNiAxMzcuMjUgNDExIDExNS42MjUgNDAyLjUgOTZINDQ4QzQ2NS42MjUgOTYgNDgwIDExMC4zNzUgNDgwIDEyOFY0NDhaTTI1NiAyNTZDMjgyLjUgMjU2IDMwNCAyMzQuNSAzMDQgMjA4QzMwNCAxOTQuMTI1IDI5OCAxODEuNjI1IDI4OC41IDE3Mi44NzVMMzE4Ljc1IDEwMi4yNUMzMjIuMTI1IDk0LjI1IDMxOC4zNzUgODQuNzUgMzEwLjI1IDgxLjI1QzMwMi4yNSA3Ny44NzUgMjkyLjc1IDgxLjYyNSAyODkuMjUgODkuNzVMMjU5IDE2MC4yNUMyMjMuNjI1IDE1OCAyMDggMTg4LjYyNSAyMDggMjA4QzIwOCAyMzQuNSAyMjkuNSAyNTYgMjU2IDI1NlpNMjU2IDE5MkMyNjQuODc1IDE5MiAyNzIgMTk5LjEyNSAyNzIgMjA4UzI2NC44NzUgMjI0IDI1NiAyMjRTMjQwIDIxNi44NzUgMjQwIDIwOFMyNDcuMTI1IDE5MiAyNTYgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WeightScale(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 64H383.25C354 25.375 308.125 0 256 0S158 25.375 128.75 64H64C28.75 64 0 92.75 0 128V448C0 483.25 28.75 512 64 512H448C483.25 512 512 483.25 512 448V128C512 92.75 483.25 64 448 64ZM256 32C326.75 32 384 89.25 384 160S326.75 288 256 288S128 230.75 128 160S185.25 32 256 32ZM480 448C480 465.625 465.625 480 448 480H64C46.375 480 32 465.625 32 448V128C32 110.375 46.375 96 64 96H109.5C101 115.625 96 137.25 96 160C96 248.25 167.75 320 256 320S416 248.25 416 160C416 137.25 411 115.625 402.5 96H448C465.625 96 480 110.375 480 128V448ZM256 256C282.5 256 304 234.5 304 208C304 194.125 298 181.625 288.5 172.875L318.75 102.25C322.125 94.25 318.375 84.75 310.25 81.25C302.25 77.875 292.75 81.625 289.25 89.75L259 160.25C223.625 158 208 188.625 208 208C208 234.5 229.5 256 256 256ZM256 192C264.875 192 272 199.125 272 208S264.875 224 256 224S240 216.875 240 208S247.125 192 256 192Z" />
        </Icon>
    </>
}