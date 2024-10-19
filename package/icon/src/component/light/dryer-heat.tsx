
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dryer-heat` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dryer-heat?s=light dryer-heat}
 * @preview ![dryer-heat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlY0NDhDMCA0ODMuMzQ4IDI4LjY1NCA1MTIgNjQgNTEySDM4NEM0MTkuMzQ2IDUxMiA0NDggNDgzLjM0OCA0NDggNDQ4Vjk2QzQ0OCA0Mi45OCA0MDUuMDIgMCAzNTIgMFpNNDE2IDQ0OEM0MTYgNDY1LjY0NSA0MDEuNjQ1IDQ4MCAzODQgNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWOTZDMzIgNjAuNzExIDYwLjcxMSAzMiA5NiAzMkgzNTJDMzg3LjI4OSAzMiA0MTYgNjAuNzExIDQxNiA5NlY0NDhaTTE5Mi4wNjIgMTIwQzIwNS4yNzcgMTIwIDIxNiAxMDkuMjUgMjE2IDk2UzIwNS4yNzcgNzIgMTkyLjA2MiA3MkMxNzguNzIzIDcyIDE2OCA4Mi43NSAxNjggOTZTMTc4LjcyMyAxMjAgMTkyLjA2MiAxMjBaTTEyMCA5NkMxMjAgODIuNzUgMTA5LjMwNyA3MiA5NiA3MkM4Mi44MTggNzIgNzIgODIuNzUgNzIgOTZTODIuODE4IDEyMCA5NiAxMjBDMTA5LjMwNyAxMjAgMTIwIDEwOS4yNSAxMjAgOTZaTTIyNCAxNjBDMTQ0LjQ4IDE2MCA4MC4wMTggMjI0LjUgODAuMDE4IDMwNFMxNDQuNDggNDQ4IDIyNCA0NDhTMzY3Ljk4MiAzODMuNSAzNjcuOTgyIDMwNFMzMDMuNTIgMTYwIDIyNCAxNjBaTTIyNCA0MTZDMTYyLjI1NCA0MTYgMTEyLjAxOCAzNjUuNzU4IDExMi4wMTggMzA0UzE2Mi4yNTQgMTkyIDIyNCAxOTJDMjg1Ljc0OCAxOTIgMzM1Ljk4MiAyNDIuMjQyIDMzNS45ODIgMzA0UzI4NS43NDggNDE2IDIyNCA0MTZaTTIxMi42MDkgMzUwQzIwMi4zNTkgMzM5Ljc1IDE5OS44MjggMzI0LjEyNSAyMDYuMzEzIDMxMS4xNTZDMjE4Ljk2OSAyODUuODQ0IDIxNC4wMzEgMjU1LjQwNiAxOTQgMjM1LjM3NUwxODcuMjk3IDIyOC42ODhDMTgxLjA0NyAyMjIuNDM4IDE3MC45MjIgMjIyLjQzOCAxNjQuNjcyIDIyOC42ODhDMTU4LjQzOCAyMzQuOTY5IDE1OC40MzggMjQ1LjA5NCAxNjQuNzAzIDI1MS4zMTJMMTcxLjM5MSAyNThDMTgxLjY0MSAyNjguMjUgMTg0LjE3MiAyODMuODc1IDE3Ny42ODcgMjk2Ljg0NEMxNjUuMDMxIDMyMi4xNTYgMTY5Ljk2OSAzNTIuNTk0IDE5MCAzNzIuNjI1TDE5Ni43MDMgMzc5LjMxM0MxOTkuODI4IDM4Mi40MzggMjAzLjkwNiAzODQgMjA4IDM4NFMyMTYuMjAzIDM4Mi40MzggMjE5LjMyOCAzNzkuMzEyQzIyNS41NjIgMzczLjAzMSAyMjUuNTYyIDM2Mi45MDYgMjE5LjI5NyAzNTYuNjg4TDIxMi42MDkgMzUwWk0yNzYuNjA5IDM1MEMyNjYuMzU5IDMzOS43NSAyNjMuODI4IDMyNC4xMjUgMjcwLjMxMyAzMTEuMTU2QzI4Mi45NjkgMjg1Ljg0NCAyNzguMDMxIDI1NS40MDYgMjU4IDIzNS4zNzVMMjUxLjI5NyAyMjguNjg3QzI0NS4wNDcgMjIyLjQzNyAyMzQuOTIyIDIyMi40MzcgMjI4LjY3MiAyMjguNjg3QzIyMi40MzggMjM0Ljk2OSAyMjIuNDM4IDI0NS4wOTQgMjI4LjcwMyAyNTEuMzEyTDIzNS4zOTEgMjU4QzI0NS42NDEgMjY4LjI1IDI0OC4xNzIgMjgzLjg3NSAyNDEuNjg3IDI5Ni44NDRDMjI5LjAzMSAzMjIuMTU2IDIzMy45NjkgMzUyLjU5NCAyNTQgMzcyLjYyNUwyNjAuNzAzIDM3OS4zMTNDMjYzLjgyOCAzODIuNDM4IDI2Ny45MDYgMzg0IDI3MiAzODRTMjgwLjIwMyAzODIuNDM4IDI4My4zMjggMzc5LjMxMkMyODkuNTYyIDM3My4wMzEgMjg5LjU2MiAzNjIuOTA2IDI4My4yOTcgMzU2LjY4OEwyNzYuNjA5IDM1MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DryerHeat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 0H96C42.98 0 0 42.98 0 96V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V96C448 42.98 405.02 0 352 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V96C32 60.711 60.711 32 96 32H352C387.289 32 416 60.711 416 96V448ZM192.062 120C205.277 120 216 109.25 216 96S205.277 72 192.062 72C178.723 72 168 82.75 168 96S178.723 120 192.062 120ZM120 96C120 82.75 109.307 72 96 72C82.818 72 72 82.75 72 96S82.818 120 96 120C109.307 120 120 109.25 120 96ZM224 160C144.48 160 80.018 224.5 80.018 304S144.48 448 224 448S367.982 383.5 367.982 304S303.52 160 224 160ZM224 416C162.254 416 112.018 365.758 112.018 304S162.254 192 224 192C285.748 192 335.982 242.242 335.982 304S285.748 416 224 416ZM212.609 350C202.359 339.75 199.828 324.125 206.313 311.156C218.969 285.844 214.031 255.406 194 235.375L187.297 228.688C181.047 222.438 170.922 222.438 164.672 228.688C158.438 234.969 158.438 245.094 164.703 251.312L171.391 258C181.641 268.25 184.172 283.875 177.687 296.844C165.031 322.156 169.969 352.594 190 372.625L196.703 379.313C199.828 382.438 203.906 384 208 384S216.203 382.438 219.328 379.312C225.562 373.031 225.562 362.906 219.297 356.688L212.609 350ZM276.609 350C266.359 339.75 263.828 324.125 270.313 311.156C282.969 285.844 278.031 255.406 258 235.375L251.297 228.687C245.047 222.437 234.922 222.437 228.672 228.687C222.438 234.969 222.438 245.094 228.703 251.312L235.391 258C245.641 268.25 248.172 283.875 241.687 296.844C229.031 322.156 233.969 352.594 254 372.625L260.703 379.313C263.828 382.438 267.906 384 272 384S280.203 382.438 283.328 379.312C289.562 373.031 289.562 362.906 283.297 356.688L276.609 350Z" />
        </Icon>
    </>
}