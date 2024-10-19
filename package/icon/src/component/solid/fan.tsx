
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fan` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fan?s=solid fan}
 * @preview ![fan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIuNjI0IDEyNy45OTlDMzI0LjQ5OSAxMjcuOTk5IDI5OC40OTkgMTMyLjQ5OSAyNzUuNDk5IDE0MC44NzRMMjg3Ljg3NCAxNy43NDlDMjg4Ljk5OSA3LjI0OSAyNzkuNzQ5IC0xLjEyNiAyNjkuMzc0IDAuMTI0QzE4OS42MjQgMTAuMTI0IDEyNy45OTkgNzcuNjI0IDEyNy45OTkgMTU5LjM3NEMxMjcuOTk5IDE4Ny40OTkgMTMyLjQ5OSAyMTMuNDk5IDE0MC44NzQgMjM2LjQ5OUwxNy43NDkgMjI0LjEyNEM3LjI0OSAyMjIuOTk5IC0xLjEyNiAyMzIuMjQ5IDAuMTI0IDI0Mi42MjRDMTAuMTI0IDMyMi4zNzQgNzcuNjI0IDM4My45OTkgMTU5LjM3NCAzODMuOTk5QzE4Ny40OTkgMzgzLjk5OSAyMTMuNDk5IDM3OS40OTkgMjM2LjQ5OSAzNzEuMTI0TDIyNC4xMjQgNDk0LjI0OUMyMjIuOTk5IDUwNC42MjQgMjMyLjI0OSA1MTMuMTI0IDI0Mi42MjQgNTExLjg3NEMzMjIuMzc0IDUwMS44NzQgMzgzLjk5OSA0MzQuMzc0IDM4My45OTkgMzUyLjYyNEMzODMuOTk5IDMyNC40OTkgMzc5LjQ5OSAyOTguNDk5IDM3MS4xMjQgMjc1LjQ5OUw0OTQuMjQ5IDI4Ny44NzRDNTA0Ljc0OSAyODguOTk5IDUxMy4xMjQgMjc5Ljc0OSA1MTEuODc0IDI2OS4zNzRDNTAxLjg3NCAxODkuNjI0IDQzNC4zNzQgMTI3Ljk5OSAzNTIuNjI0IDEyNy45OTlaTTI1NS45OTkgMjg3Ljk5OUMyMzguMzc0IDI4Ny45OTkgMjIzLjk5OSAyNzMuNjI0IDIyMy45OTkgMjU1Ljk5OUMyMjMuOTk5IDIzOC4zNzQgMjM4LjM3NCAyMjMuOTk5IDI1NS45OTkgMjIzLjk5OVMyODcuOTk5IDIzOC4zNzQgMjg3Ljk5OSAyNTUuOTk5QzI4Ny45OTkgMjczLjYyNCAyNzMuNjI0IDI4Ny45OTkgMjU1Ljk5OSAyODcuOTk5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Fan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352.624 127.999C324.499 127.999 298.499 132.499 275.499 140.874L287.874 17.749C288.999 7.249 279.749 -1.126 269.374 0.124C189.624 10.124 127.999 77.624 127.999 159.374C127.999 187.499 132.499 213.499 140.874 236.499L17.749 224.124C7.249 222.999 -1.126 232.249 0.124 242.624C10.124 322.374 77.624 383.999 159.374 383.999C187.499 383.999 213.499 379.499 236.499 371.124L224.124 494.249C222.999 504.624 232.249 513.124 242.624 511.874C322.374 501.874 383.999 434.374 383.999 352.624C383.999 324.499 379.499 298.499 371.124 275.499L494.249 287.874C504.749 288.999 513.124 279.749 511.874 269.374C501.874 189.624 434.374 127.999 352.624 127.999ZM255.999 287.999C238.374 287.999 223.999 273.624 223.999 255.999C223.999 238.374 238.374 223.999 255.999 223.999S287.999 238.374 287.999 255.999C287.999 273.624 273.624 287.999 255.999 287.999Z" />
        </Icon>
    </>
}