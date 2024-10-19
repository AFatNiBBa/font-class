
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-r` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=light square-r}
 * @preview ![square-r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzM2IDIwOEMzMzYgMTYzLjg5MSAzMDAuMTI1IDEyOCAyNTYgMTI4SDE0NEMxMzUuMTU2IDEyOCAxMjggMTM1LjE1NiAxMjggMTQ0VjM2OEMxMjggMzc2Ljg0NCAxMzUuMTU2IDM4NCAxNDQgMzg0UzE2MCAzNzYuODQ0IDE2MCAzNjhWMjg4SDIzMC4zNDhMMzA3Ljg0NCAzNzguNDA2QzMxMS4wMzEgMzgyLjEwOSAzMTUuNSAzODQgMzIwIDM4NEMzMjMuNjg4IDM4NCAzMjcuNDA2IDM4Mi43MzQgMzMwLjQwNiAzODAuMTQxQzMzNy4xMjUgMzc0LjM5MSAzMzcuOTA2IDM2NC4yOTcgMzMyLjE1NiAzNTcuNTk0TDI3MS4xODYgMjg2LjQ2NUMzMDguMDU3IDI3OS4zNCAzMzYgMjQ2LjkxIDMzNiAyMDhaTTI1NiAyNTZIMTYwVjE2MEgyNTZDMjgyLjQ2OSAxNjAgMzA0IDE4MS41MzEgMzA0IDIwOFMyODIuNDY5IDI1NiAyNTYgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareR(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM336 208C336 163.891 300.125 128 256 128H144C135.156 128 128 135.156 128 144V368C128 376.844 135.156 384 144 384S160 376.844 160 368V288H230.348L307.844 378.406C311.031 382.109 315.5 384 320 384C323.688 384 327.406 382.734 330.406 380.141C337.125 374.391 337.906 364.297 332.156 357.594L271.186 286.465C308.057 279.34 336 246.91 336 208ZM256 256H160V160H256C282.469 160 304 181.531 304 208S282.469 256 256 256Z" />
        </Icon>
    </>
}