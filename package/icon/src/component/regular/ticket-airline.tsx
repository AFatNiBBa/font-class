
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-airline` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-airline?s=regular ticket-airline}
 * @preview ![ticket-airline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgMjE2SDY0MFYxMjhDNjQwIDkyLjYyNSA2MTEuMzc1IDY0IDU3NiA2NEg2NEMyOC42MjUgNjQgMCA5Mi42MjUgMCAxMjhWMzg0QzAgNDE5LjM3NSAyOC42MjUgNDQ4IDY0IDQ0OEg1NzZDNjExLjM3NSA0NDggNjQwIDQxOS4zNzUgNjQwIDM4NFYyOTZINjMyQzYwOS44NzUgMjk2IDU5MiAyNzguMTI1IDU5MiAyNTZTNjA5Ljg3NSAyMTYgNjMyIDIxNlpNNTkyIDE3Ny42MjVDNTYzLjUgMTkyLjI1IDU0NCAyMjEuODc1IDU0NCAyNTZTNTYzLjUgMzE5Ljc1IDU5MiAzMzQuMzc1VjM4NEM1OTIgMzkyLjg0NCA1ODQuODQ0IDQwMCA1NzYgNDAwSDY0QzU1LjE1NiA0MDAgNDggMzkyLjg0NCA0OCAzODRWMTI4QzQ4IDExOS4xNTYgNTUuMTU2IDExMiA2NCAxMTJINTc2QzU4NC44NDQgMTEyIDU5MiAxMTkuMTU2IDU5MiAxMjhWMTc3LjYyNVpNNDMyIDI3MkM0MjMuMTY0IDI3MiA0MTYgMjc5LjE2MiA0MTYgMjg4QzQxNiAyOTYuODM2IDQyMy4xNjQgMzA0IDQzMiAzMDRTNDQ4IDI5Ni44MzYgNDQ4IDI4OEM0NDggMjc5LjE2MiA0NDAuODM2IDI3MiA0MzIgMjcyWk00MzIgMzM2QzQyMy4xNjQgMzM2IDQxNiAzNDMuMTYyIDQxNiAzNTJDNDE2IDM2MC44MzYgNDIzLjE2NCAzNjggNDMyIDM2OFM0NDggMzYwLjgzNiA0NDggMzUyQzQ0OCAzNDMuMTYyIDQ0MC44MzYgMzM2IDQzMiAzMzZaTTQzMiAyMDhDNDIzLjE2NCAyMDggNDE2IDIxNS4xNjIgNDE2IDIyNEM0MTYgMjMyLjgzNiA0MjMuMTY0IDI0MCA0MzIgMjQwUzQ0OCAyMzIuODM2IDQ0OCAyMjRDNDQ4IDIxNS4xNjIgNDQwLjgzNiAyMDggNDMyIDIwOFpNNDMyIDE0NEM0MjMuMTY0IDE0NCA0MTYgMTUxLjE2MiA0MTYgMTYwQzQxNiAxNjguODM2IDQyMy4xNjQgMTc2IDQzMiAxNzZTNDQ4IDE2OC44MzYgNDQ4IDE2MEM0NDggMTUxLjE2MiA0NDAuODM2IDE0NCA0MzIgMTQ0Wk0zMTAuMDAyIDIyOEgyNjZMMjE3LjI0IDE0Ny43NEMyMTYuMDUzIDE0NS42NzQgMjEzLjE2OCAxNDQgMjEwLjc4OSAxNDRIMTgwLjRDMTc1LjQ3MSAxNDQgMTcxLjkwNCAxNDguNzE5IDE3My4yNjggMTUzLjQ1OUwxOTYuMDE0IDIyOEwxNDQuOTk0IDIyOC4wMDJWMjI4TDEyNi4xMDIgMjAyLjgwM0MxMjQuNzc1IDIwMS4wMzcgMTIyLjY5NSAyMDAgMTIwLjQ5NiAyMDBIMTAyLjk5NkM5OC40NDMgMjAwIDk1LjEwNyAyMDQuMjc3IDk2LjIxNSAyMDguNjkzTDEwOS45OTQgMjU2TDk2LjIxMyAzMDMuMzAzQzk1LjEwNSAzMDcuNzE5IDk4LjQ0MyAzMTIgMTAyLjk5NiAzMTJIMTIwLjQ5NkMxMjIuNjk3IDMxMS45OTggMTI0Ljc3NSAzMTAuOTYxIDEyNi4xMDIgMzA5LjE5NUwxNDQuOTk0IDI4NEgxOTYuMDE2TDE3My4yNjggMzU4LjUyOUMxNzEuOTA0IDM2My4yNzEgMTc1LjQ3MyAzNjcuOTk4IDE4MC40IDM2OEgyMTAuNzg5QzIxMy40NDMgMzY4IDIxNS45MDYgMzY2LjU3IDIxNy4yMjcgMzY0LjI1OEwyNjUuOTk4IDI4NEgzMTBDMzI1LjQ2MyAyODQuMDAyIDM1MiAyNzEuNDYzIDM1MiAyNTZTMzI1LjQ2MyAyMjggMzEwLjAwMiAyMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TicketAirline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 216H640V128C640 92.625 611.375 64 576 64H64C28.625 64 0 92.625 0 128V384C0 419.375 28.625 448 64 448H576C611.375 448 640 419.375 640 384V296H632C609.875 296 592 278.125 592 256S609.875 216 632 216ZM592 177.625C563.5 192.25 544 221.875 544 256S563.5 319.75 592 334.375V384C592 392.844 584.844 400 576 400H64C55.156 400 48 392.844 48 384V128C48 119.156 55.156 112 64 112H576C584.844 112 592 119.156 592 128V177.625ZM432 272C423.164 272 416 279.162 416 288C416 296.836 423.164 304 432 304S448 296.836 448 288C448 279.162 440.836 272 432 272ZM432 336C423.164 336 416 343.162 416 352C416 360.836 423.164 368 432 368S448 360.836 448 352C448 343.162 440.836 336 432 336ZM432 208C423.164 208 416 215.162 416 224C416 232.836 423.164 240 432 240S448 232.836 448 224C448 215.162 440.836 208 432 208ZM432 144C423.164 144 416 151.162 416 160C416 168.836 423.164 176 432 176S448 168.836 448 160C448 151.162 440.836 144 432 144ZM310.002 228H266L217.24 147.74C216.053 145.674 213.168 144 210.789 144H180.4C175.471 144 171.904 148.719 173.268 153.459L196.014 228L144.994 228.002V228L126.102 202.803C124.775 201.037 122.695 200 120.496 200H102.996C98.443 200 95.107 204.277 96.215 208.693L109.994 256L96.213 303.303C95.105 307.719 98.443 312 102.996 312H120.496C122.697 311.998 124.775 310.961 126.102 309.195L144.994 284H196.016L173.268 358.529C171.904 363.271 175.473 367.998 180.4 368H210.789C213.443 368 215.906 366.57 217.227 364.258L265.998 284H310C325.463 284.002 352 271.463 352 256S325.463 228 310.002 228Z" />
        </Icon>
    </>
}