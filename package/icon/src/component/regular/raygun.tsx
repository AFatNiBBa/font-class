
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `raygun` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=regular raygun}
 * @preview ![raygun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMTUxLjk5MkM5OC43NSAxNTEuOTkyIDg4IDE2Mi43NDQgODggMTc1Ljk5NUM4OCAxODkuMjQ3IDk4Ljc1IDE5OS45OTggMTEyIDE5OS45OThTMTM2IDE4OS4yNDcgMTM2IDE3NS45OTVDMTM2IDE2Mi43NDQgMTI1LjI1IDE1MS45OTIgMTEyIDE1MS45OTJaTTIwOCAxNTEuOTkyQzE5NC43NSAxNTEuOTkyIDE4NCAxNjIuNzQ0IDE4NCAxNzUuOTk1QzE4NCAxODkuMjQ3IDE5NC43NSAxOTkuOTk4IDIwOCAxOTkuOTk4UzIzMiAxODkuMjQ3IDIzMiAxNzUuOTk1QzIzMiAxNjIuNzQ0IDIyMS4yNSAxNTEuOTkyIDIwOCAxNTEuOTkyWk0zMTEuOTk5IDMxLjk3OEgzMTEuOTk5QzI5OC44IDMxLjk3OCAyODggNDIuNzc4IDI4OCA1NS45NzdWNzUuMjMzQzI3My4xMjUgNjcuODU3IDI1Ni42MjUgNjQuMTA3IDI0MCA2My45ODJIMTkyTDg3LjEyNSAxLjcyNEM4Mi4yNSAtMC43NzYgNzYuMjUgLTAuNTI2IDcxLjYyNSAyLjM0OUM2Ni44NzUgNS4zNSA2NCAxMC40NzUgNjQgMTUuOTc2Vjc1LjIzM0MyNi4yNSA5My4yMzUgMCAxMzEuMzY1IDAgMTc1Ljk5NUMwIDIzMS4yNTIgNDAuMTI1IDI3Ni44ODIgOTIuODc1IDI4Ni4wMDhMMjIuMzc1IDQwOC4wMjNDMTYgNDE5LjAyNCAxNC4yNSA0MzIuMTUxIDE3LjYyNSA0NDQuNDAyQzIwLjg3NSA0NTYuNzc5IDI5IDQ2Ny4yOCA0MCA0NzMuNTMxTDk1LjM3NSA1MDUuNTM0QzEwNi41IDUxMS45MSAxMTkuNSA1MTMuNjYgMTMxLjg3NSA1MTAuNDFDMTQ0LjEyNSA1MDcuMTYgMTU0LjYyNSA0OTkuMDM0IDE2MSA0ODguMDMyTDI4MS4xMjUgMjc5Ljg4M0MyODMuNSAyNzkuMDA3IDI4NS42MjUgMjc3LjM4MiAyODggMjc2LjI1N1YyOTYuMDExQzI4OCAzMDkuMjEyIDI5OC44IDMyMC4wMTIgMzEyLjAwMSAzMjAuMDEySDMxMi4wMDFDMzI1LjIgMzIwLjAxMiAzMzYgMzA5LjIxMyAzMzYgMjk2LjAxM1Y1NS45NzlDMzM2IDQyLjcyNCAzMjUuMjU0IDMxLjk3OCAzMTEuOTk5IDMxLjk3OFpNMTE5LjM3NSA0NjQuMDNMNjQgNDMyLjAyNkwxMzQuMzc1IDMxMC4wMTFMMTQ3LjEyNSAyODguMDA5SDIyMUwxMTkuMzc1IDQ2NC4wM1pNMjg4IDIxNy43NUMyNzYgMjMxLjc1MiAyNTguNSAyMzkuODc4IDI0MCAyNDAuMDAzSDExMkM3Ni42MjUgMjQwLjAwMyA0OCAyMTEuMzc0IDQ4IDE3NS45OTVTNzYuNjI1IDExMS45ODggMTEyIDExMS45ODhIMjQwQzI1OC41IDExMS45ODggMjc2IDEyMC4xMTQgMjg4IDEzNC4xMTVWMjE3Ljc1Wk01NTQuODc1IDExOC45ODhMNDgwIDE0My45OTFINDE2Vjg3Ljk4M0M0MTYgNzQuNzI3IDQwNS4yNTQgNjMuOTgyIDM5MS45OTkgNjMuOTgySDM5MS45OTlDMzc4LjggNjMuOTgyIDM2OCA3NC43ODEgMzY4IDg3Ljk4MVYyNjQuMDA4QzM2OCAyNzcuMjA4IDM3OC44IDI4OC4wMDkgMzkyLjAwMSAyODguMDA5SDM5Mi4wMDFDNDA1LjIgMjg4LjAwOSA0MTYgMjc3LjIwOSA0MTYgMjY0LjAxVjIwNy45OTlINDgwLjEyNUw1NTQuODc1IDIzMy4wMDJDNTU5Ljc1IDIzNC42MjcgNTY1LjEyNSAyMzMuNzUyIDU2OS4zNzUgMjMwLjc1MkM1NzMuNSAyMjcuNzUxIDU3NiAyMjIuODc2IDU3NiAyMTcuNzVWMTM0LjI0QzU3NiAxMjguOTkgNTczLjUgMTI0LjIzOSA1NjkuMzc1IDEyMS4yMzlDNTY1LjEyNSAxMTguMjM4IDU1OS44NzUgMTE3LjM2MyA1NTUgMTE4Ljk4OEg1NTQuODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Raygun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M112 151.992C98.75 151.992 88 162.744 88 175.995C88 189.247 98.75 199.998 112 199.998S136 189.247 136 175.995C136 162.744 125.25 151.992 112 151.992ZM208 151.992C194.75 151.992 184 162.744 184 175.995C184 189.247 194.75 199.998 208 199.998S232 189.247 232 175.995C232 162.744 221.25 151.992 208 151.992ZM311.999 31.978H311.999C298.8 31.978 288 42.778 288 55.977V75.233C273.125 67.857 256.625 64.107 240 63.982H192L87.125 1.724C82.25 -0.776 76.25 -0.526 71.625 2.349C66.875 5.35 64 10.475 64 15.976V75.233C26.25 93.235 0 131.365 0 175.995C0 231.252 40.125 276.882 92.875 286.008L22.375 408.023C16 419.024 14.25 432.151 17.625 444.402C20.875 456.779 29 467.28 40 473.531L95.375 505.534C106.5 511.91 119.5 513.66 131.875 510.41C144.125 507.16 154.625 499.034 161 488.032L281.125 279.883C283.5 279.007 285.625 277.382 288 276.257V296.011C288 309.212 298.8 320.012 312.001 320.012H312.001C325.2 320.012 336 309.213 336 296.013V55.979C336 42.724 325.254 31.978 311.999 31.978ZM119.375 464.03L64 432.026L134.375 310.011L147.125 288.009H221L119.375 464.03ZM288 217.75C276 231.752 258.5 239.878 240 240.003H112C76.625 240.003 48 211.374 48 175.995S76.625 111.988 112 111.988H240C258.5 111.988 276 120.114 288 134.115V217.75ZM554.875 118.988L480 143.991H416V87.983C416 74.727 405.254 63.982 391.999 63.982H391.999C378.8 63.982 368 74.781 368 87.981V264.008C368 277.208 378.8 288.009 392.001 288.009H392.001C405.2 288.009 416 277.209 416 264.01V207.999H480.125L554.875 233.002C559.75 234.627 565.125 233.752 569.375 230.752C573.5 227.751 576 222.876 576 217.75V134.24C576 128.99 573.5 124.239 569.375 121.239C565.125 118.238 559.875 117.363 555 118.988H554.875Z" />
        </Icon>
    </>
}