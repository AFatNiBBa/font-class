
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=regular up-long}
 * @preview ![up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODUuOTk5IDEzOC4wMTJDMjgyLjE4OSAxNDYuNzcgMjczLjU0OCAxNTIuNDMgMjY0LjAwMSAxNTIuNDNIMTgzLjk5OVY0ODAuMzI0QzE4My45OTkgNDkzLjU3NCAxNzMuMjQ5IDUwNC4zMjQgMTU5Ljk5OSA1MDQuMzI0UzEzNS45OTkgNDkzLjU3NCAxMzUuOTk5IDQ4MC4zMjRWMTUyLjQzSDU1Ljk5OUM0Ni40NTMgMTUyLjQzIDM3LjgxMiAxNDYuNzcgMzMuOTk3IDEzOC4wMTJDMzAuMTg3IDEyOS4yNTggMzEuOTIxIDExOS4wNjMgMzguNDA2IDExMi4wNzRMMTQyLjQwNiAwQzE1MS45MDYgLTEwLjIzNCAxNjguMDk1IC0xMC4yMzQgMTc3LjU5MyAwTDI4MS41OTUgMTEyLjA3NEMyODguMDggMTE5LjA2MyAyODkuODE0IDEyOS4yNTggMjg1Ljk5OSAxMzguMDEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M285.999 138.012C282.189 146.77 273.548 152.43 264.001 152.43H183.999V480.324C183.999 493.574 173.249 504.324 159.999 504.324S135.999 493.574 135.999 480.324V152.43H55.999C46.453 152.43 37.812 146.77 33.997 138.012C30.187 129.258 31.921 119.063 38.406 112.074L142.406 0C151.906 -10.234 168.095 -10.234 177.593 0L281.595 112.074C288.08 119.063 289.814 129.258 285.999 138.012Z" />
        </Icon>
    </>
}