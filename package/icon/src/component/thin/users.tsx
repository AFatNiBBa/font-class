
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=thin users}
 * @preview ![users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTYuNSAxOTJINDgwQzQ3NC4wMzEgMTkyIDQ2OC4wMzEgMTkyLjcwMyA0NjIuMTU2IDE5NC4wOTRDNDU3Ljg1OSAxOTUuMTA5IDQ1NS4yMDMgMTk5LjQyMiA0NTYuMjE5IDIwMy43MTlDNDU3LjIxOSAyMDggNDYxLjUgMjEwLjc2NiA0NjUuODQ0IDIwOS42NTZDNDcwLjUgMjA4LjU2MiA0NzUuMjY2IDIwOCA0ODAgMjA4SDU1Ni41QzU5My43MTkgMjA4IDYyNCAyNDAuMjk3IDYyNCAyODBDNjI0IDI4NC40MDYgNjIwLjgxMiAyODggNjE2LjkwNiAyODhINDQ4QzQ0My41NzggMjg4IDQ0MCAyOTEuNTc4IDQ0MCAyOTZTNDQzLjU3OCAzMDQgNDQ4IDMwNEg2MTYuOTA2QzYyOS42NDEgMzA0IDY0MCAyOTMuMjM0IDY0MCAyODBDNjQwIDIzMS40NjkgNjAyLjU0NyAxOTIgNTU2LjUgMTkyWk01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk01MTIgMTZDNTQ3LjI4OSAxNiA1NzYgNDQuNzExIDU3NiA4MFM1NDcuMjg5IDE0NCA1MTIgMTQ0UzQ0OCAxMTUuMjg5IDQ0OCA4MFM0NzYuNzExIDE2IDUxMiAxNlpNMTI4IDE2MEMxNzIuMTg0IDE2MCAyMDggMTI0LjE4MiAyMDggODBTMTcyLjE4NCAwIDEyOCAwQzgzLjgyIDAgNDggMzUuODE4IDQ4IDgwUzgzLjgyIDE2MCAxMjggMTYwWk0xMjggMTZDMTYzLjI4OSAxNiAxOTIgNDQuNzExIDE5MiA4MFMxNjMuMjg5IDE0NCAxMjggMTQ0UzY0IDExNS4yODkgNjQgODBTOTIuNzExIDE2IDEyOCAxNlpNMjAwIDI5NkMyMDAgMjkxLjU3OCAxOTYuNDIyIDI4OCAxOTIgMjg4SDIzLjA5NEMxOS4xODggMjg4IDE2IDI4NC40MDYgMTYgMjgwQzE2IDI0MC4yOTcgNDYuMjgxIDIwOCA4My41IDIwOEgxNjBDMTY0LjczNCAyMDggMTY5LjUgMjA4LjU2MiAxNzQuMTU2IDIwOS42NTZDMTc4LjQ1MyAyMTAuNzY2IDE4Mi43ODEgMjA4IDE4My43ODEgMjAzLjcxOUMxODQuNzk3IDE5OS40MjIgMTgyLjE0MSAxOTUuMTA5IDE3Ny44NDQgMTk0LjA5NEMxNzEuOTY5IDE5Mi43MDMgMTY1Ljk2OSAxOTIgMTYwIDE5Mkg4My41QzM3LjQ1MyAxOTIgMCAyMzEuNDY5IDAgMjgwQzAgMjkzLjIzNCAxMC4zNTkgMzA0IDIzLjA5NCAzMDRIMTkyQzE5Ni40MjIgMzA0IDIwMCAzMDAuNDIyIDIwMCAyOTZaTTMxOS44NTkgMzIwQzM3Ny4yNzMgMzIwIDQyMy44MTQgMjczLjQzNiA0MjMuODE0IDIxNkM0MjMuODE0IDE1OC41NjIgMzc3LjI3MyAxMTIgMzE5Ljg1OSAxMTJDMjYyLjQ1MSAxMTIgMjE1LjkwNCAxNTguNTYyIDIxNS45MDQgMjE2QzIxNS45MDQgMjczLjQzNiAyNjIuNDUxIDMyMCAzMTkuODU5IDMyMFpNMzE5Ljg1OSAxMjhDMzY4LjM1NyAxMjggNDA3LjgxNCAxNjcuNDc3IDQwNy44MTQgMjE2UzM2OC4zNTcgMzA0IDMxOS44NTkgMzA0UzIzMS45MDQgMjY0LjUyMyAyMzEuOTA0IDIxNlMyNzEuMzYxIDEyOCAzMTkuODU5IDEyOFpNMzY5Ljg4NyAzNTJIMjcwLjExM0MxOTEuNjMxIDM1MiAxMjggNDExLjY5MyAxMjggNDg1LjMzMkMxMjggNTAwLjA1OSAxNDAuNzI3IDUxMiAxNTYuNDIyIDUxMkg0ODMuNTc4QzQ5OS4yNzMgNTEyIDUxMiA1MDAuMDU5IDUxMiA0ODUuMzMyQzUxMiA0MTEuNjkzIDQ0OC4zNzcgMzUyIDM2OS44ODcgMzUyWk00ODMuNTc4IDQ5NkgxNTYuNDIyQzE0OS41NzIgNDk2IDE0NCA0OTEuMjE1IDE0NCA0ODUuMzMyQzE0NCA0MjAuNjM1IDIwMC41NzQgMzY4IDI3MC4xMTMgMzY4SDM2OS44ODdDNDM5LjQyNiAzNjggNDk2IDQyMC42MzUgNDk2IDQ4NS4zMzJDNDk2IDQ5MS4yMTUgNDkwLjQyOCA0OTYgNDgzLjU3OCA0OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Users(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M556.5 192H480C474.031 192 468.031 192.703 462.156 194.094C457.859 195.109 455.203 199.422 456.219 203.719C457.219 208 461.5 210.766 465.844 209.656C470.5 208.562 475.266 208 480 208H556.5C593.719 208 624 240.297 624 280C624 284.406 620.812 288 616.906 288H448C443.578 288 440 291.578 440 296S443.578 304 448 304H616.906C629.641 304 640 293.234 640 280C640 231.469 602.547 192 556.5 192ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM512 16C547.289 16 576 44.711 576 80S547.289 144 512 144S448 115.289 448 80S476.711 16 512 16ZM128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM128 16C163.289 16 192 44.711 192 80S163.289 144 128 144S64 115.289 64 80S92.711 16 128 16ZM200 296C200 291.578 196.422 288 192 288H23.094C19.188 288 16 284.406 16 280C16 240.297 46.281 208 83.5 208H160C164.734 208 169.5 208.562 174.156 209.656C178.453 210.766 182.781 208 183.781 203.719C184.797 199.422 182.141 195.109 177.844 194.094C171.969 192.703 165.969 192 160 192H83.5C37.453 192 0 231.469 0 280C0 293.234 10.359 304 23.094 304H192C196.422 304 200 300.422 200 296ZM319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM319.859 128C368.357 128 407.814 167.477 407.814 216S368.357 304 319.859 304S231.904 264.523 231.904 216S271.361 128 319.859 128ZM369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C499.273 512 512 500.059 512 485.332C512 411.693 448.377 352 369.887 352ZM483.578 496H156.422C149.572 496 144 491.215 144 485.332C144 420.635 200.574 368 270.113 368H369.887C439.426 368 496 420.635 496 485.332C496 491.215 490.428 496 483.578 496Z" />
        </Icon>
    </>
}