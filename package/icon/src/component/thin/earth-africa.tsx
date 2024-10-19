
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `earth-africa` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-africa?s=thin earth-africa}
 * @preview ![earth-africa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NkMxNiA0MTEuMDQ5IDE0Ny45NDEgNDk2IDI1NiA0OTZDMzYxLjA3MiA0OTYgNDk2IDQxMi40NTQgNDk2IDI1NkM0OTYgMTIzLjQxOCAzODguNTM5IDE2IDI1NiAxNlpNMjU2IDQ4MEMxNTguMTkzIDQ4MCAzMiA0MDIuMjE5IDMyIDI1NkMzMiAxMzIuNDg0IDEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZDNDgwIDQwMC45MDYgMzU2LjU4NyA0ODAgMjU2IDQ4MFpNNDQxLjY4OCAyMDBINDMxLjVDNDE4LjUzMSAyMDAgNDA4IDIxMC41MzEgNDA4IDIyMy41VjIzMC4zNzVDNDA4IDIzMy4yNSA0MDYuNDM4IDIzNS44NDQgNDAzLjkzOCAyMzcuMDk0TDM4OC4zNzUgMjQ0Ljg3NUMzODYuMDk0IDI0Ni4wMzEgMzgzLjIxOSAyNDUuOTA2IDM4MC45MzggMjQ0LjM0NEwzNjIuNzE5IDIzMi4xODhDMzU2LjUzMSAyMjguMDk0IDM0OC45MzggMjI3LjA5NCAzNDIuMjgxIDIyOS41MzFMMzM5LjY1NiAyMzAuMzc1QzMzMi43NSAyMzIuNjI1IDMyNy4zNzUgMjM3Ljg3NSAzMjQuOTM4IDI0NC43ODFDMzIyLjQzOCAyNTEuODEzIDMyMy4zNDQgMjU5LjQwNiAzMjcuNDY5IDI2NS42ODhMMzQwLjc4MSAyODUuNTMxQzM0NS4wOTQgMjkyLjA5NCAzNTIuNDA2IDI5NiAzNjAuMjgxIDI5NkgzNjguNTMxQzM3Mi42NTYgMjk2IDM3Ni4wMzEgMjk5LjM3NSAzNzYuMDMxIDMwMy41VjMxNC44NzVDMzc2LjAzMSAzMTYuNSAzNzUuNTMxIDMxNy45NjkgMzc0LjQ2OSAzMTkuMzQ0TDM1NS44NzUgMzQ0LjI1QzM1My43ODEgMzQ2Ljk2OSAzNTIuMjgxIDM1MC4yNSAzNTEuNDM4IDM1NC4wNjJMMzQ3LjI1IDM3Ni44NzVDMzQ2LjkzOCAzNzguNDY5IDM0Ni4wOTQgMzc5LjkzNyAzNDQuODc1IDM4MS4wOTRDMzM0Ljk2OSAzOTAuMDk0IDMyNi4xNTYgNDAwLjQwNiAzMTguNjI1IDQxMS42ODdMMzA1LjUzMSA0MzEuMjVDMzA1LjEyNSA0MzEuODQ0IDMwNC4wOTQgNDMyLjYyNSAzMDMgNDMzLjQ2OUwzMDIuNTYyIDQzMy44MTJDMjk1LjMxMiA0MzUuNjg3IDI4OC4xMjUgNDM3LjEyNSAyODEuMTI1IDQzOC4xMjVDMjc2LjkwNiA0MzYuMjUgMjczLjU2MiA0MzMuMDk0IDI3MS41MzEgNDI5LjA2MkMyNjYuNjI1IDQxOS4yNSAyNjQuMDMxIDQwOC4yODEgMjY0LjAzMSAzOTcuMzc1VjM2Ny41QzI2NC4wMzEgMzU0LjUzMSAyNTMuNSAzNDQgMjQwLjUzMSAzNDRIMjE0LjYyNUMyMDIuMzc1IDM0NCAxOTAuMzQ0IDMzOS4wMzEgMTgxLjY4NyAzMzAuMzc1QzE3Mi45NjkgMzIxLjYyNSAxNjggMzA5LjU5NCAxNjggMjk3LjM3NVYyODMuMjVDMTY4IDI2OC42NTYgMTc0Ljk2OSAyNTQuNzUgMTg2LjcxOSAyNDZMMjE0LjE4NyAyMjUuMzEyQzIyNy42NTYgMjE1LjI4MSAyNDcuOTA2IDIxMi44NzUgMjYzLjk2OSAyMjAuOTA2TDI3OC42MjUgMjI4LjIxOUMyODQuMDMxIDIzMS4wMzEgMjkwLjUzMSAyMzEuNTMxIDI5Ni41OTQgMjI5LjU5NEwzNDMuOTY5IDIxMy44MTJDMzUzLjU5NCAyMTAuNTYyIDM2MC4wNjIgMjAxLjU5NCAzNjAuMDYyIDE5MS41QzM2MC4wNjIgMTc4LjUzMSAzNDkuNTMxIDE2OCAzMzYuNTYyIDE2OEgzMjYuMzc1QzMyNC40MDYgMTY4IDMyMi41NjIgMTY3LjIxOSAzMjEuMTg3IDE2NS44NzVMMzE0LjIxOSAxNTguODEzQzMwOS44NDQgMTU0LjQ2OSAzMDMuNzgxIDE1MiAyOTcuNTYyIDE1MkgyMDcuNDY5QzIwMy40MDYgMTUyIDE5OS45NjkgMTQ4LjU2MiAxOTkuOTY5IDE0NC41VjE0MC4xMjVDMTk5Ljk2OSAxMzYuNjI1IDIwMi4zMTIgMTMzLjU5NCAyMDUuNTk0IDEzMi43ODFMMjIwLjMxMiAxMjkuMjE5QzIyNi4xNTYgMTI3LjY4NyAyMzEuMDMxIDEyNC4xMjUgMjMzLjk2OSAxMTkuNDY5TDI0Mi4wMzEgMTA3LjQwNkMyNDMuNDY5IDEwNS4zMTIgMjQ1Ljg3NSAxMDQgMjQ4LjI4MSAxMDRIMjcyLjVDMjg1LjQ2OSAxMDQgMjk2IDkzLjQ2OSAyOTYgODAuNVY2Ni44NzVDMjk2IDYyLjQ2OSAyOTIuNDA2IDU4Ljg3NSAyODggNTguODc1UzI4MCA2Mi40NjkgMjgwIDY2Ljg3NVY4MC41QzI4MCA4NC42MjUgMjc2LjYyNSA4OCAyNzIuNSA4OEgyNDguMjgxQzI0MC41MzEgODggMjMzLjI4MSA5MS44NzUgMjI4Ljc4MSA5OC40MDZMMjIwLjUzMSAxMTAuNzVDMjE5LjYyNSAxMTIuMTg4IDIxOC4wOTQgMTEzLjI1IDIxNi4zNzUgMTEzLjcxOUwyMDEuNzUgMTE3LjI1QzE5MS4yODEgMTE5LjkwNiAxODMuOTY5IDEyOS4zMTIgMTgzLjk2OSAxNDAuMTI1VjE0NC41QzE4My45NjkgMTU3LjQ2OSAxOTQuNSAxNjggMjA3LjQ2OSAxNjhIMjk3LjU2MkMyOTkuNTk0IDE2OCAzMDEuNTYyIDE2OC44MTIgMzAyLjkwNiAxNzAuMTI1TDMwOS44NDQgMTc3LjE1NkMzMTQuMjUgMTgxLjU2MiAzMjAuMTI1IDE4NCAzMjYuMzc1IDE4NEgzMzYuNTYyQzM0MC42ODcgMTg0IDM0NC4wNjIgMTg3LjM3NSAzNDQuMDYyIDE5MS41QzM0NC4wNjIgMTk0LjY4OCAzNDEuOTA2IDE5Ny42MjUgMzM4Ljg3NSAxOTguNjU2TDI5MS41OTQgMjE0LjM3NUMyODkuNjI1IDIxNC45NjkgMjg3LjU2MiAyMTQuODQ0IDI4NS44NzUgMjEzLjk2OUwyNzEuMDk0IDIwNi41OTRDMjUxLjUgMTk2LjgxMiAyMjQuMDMxIDE5OCAyMDQuNTk0IDIxMi41TDE3Ny4xMjUgMjMzLjIxOUMxNjEuNDA2IDI0NC45MDYgMTUyIDI2My42MjUgMTUyIDI4My4yNVYyOTcuMzc1QzE1MiAzMTQuMDMxIDE1OC41IDMyOS43NSAxNzAuMzQ0IDM0MS42NTZDMTgyLjAzMSAzNTMuMzEyIDE5OC4xODggMzYwIDIxNC42MjUgMzYwSDI0MC41MzFDMjQ0LjY1NiAzNjAgMjQ4LjAzMSAzNjMuMzc1IDI0OC4wMzEgMzY3LjVWMzk3LjM3NUMyNDguMDMxIDQxMC43NSAyNTEuMjE5IDQyNC4xODggMjU3LjIxOSA0MzYuMTg4QzI2MS4zNzUgNDQ0LjUgMjY4LjU5NCA0NTAuNzgxIDI3Ny41IDQ1My44NzVMMjc5LjI4MSA0NTQuNDY5TDI4MS4xMjUgNDU0LjI1QzI5MCA0NTMuMTI1IDI5OS4xMjUgNDUxLjMxMyAzMDguMjgxIDQ0OC44NDRMMzEyLjY1NiA0NDYuMjE5QzMxNC41OTQgNDQ0Ljc1IDMxNyA0NDIuOTA2IDMxOC44NzUgNDQwLjA2M0wzMzEuOTM4IDQyMC41NjNDMzM4Ljc1IDQxMC4zNDQgMzQ2LjcxOSA0MDEuMDMxIDM1NS43MTkgMzkyLjg0NEMzNTkuNSAzODkuMjgxIDM2MiAzODQuODEzIDM2Mi45NjkgMzc5LjgxM0wzNjcuMTI1IDM1Ny4yNUMzNjcuNDA2IDM1NiAzNjcuOTA2IDM1NC44NDQgMzY4LjYyNSAzNTMuOTA2TDM4Ny4xNTYgMzI5LjA2M0MzOTAuMzEzIDMyNS4wNjMgMzkyLjAzMSAzMjAuMDMxIDM5Mi4wMzEgMzE0Ljg3NVYzMDMuNUMzOTIuMDMxIDI5MC41MzEgMzgxLjUgMjgwIDM2OC41MzEgMjgwSDM2MC4yODFDMzU3LjgxMyAyODAgMzU1LjQzOCAyNzguNzUgMzU0LjA5NCAyNzYuNjg4TDM0MC44MTMgMjU2Ljg3NUMzMzkuNSAyNTQuODQ0IDMzOS4xODggMjUyLjM3NSAzNDAgMjUwLjA5NEMzNDAuNDY5IDI0OC44NDQgMzQxLjY1NiAyNDYuNTYyIDM0NC42MjUgMjQ1LjU5NEwzNDcuNDM4IDI0NC42NTZDMzQ5LjYyNSAyNDMuOTA2IDM1MS45MDYgMjQ0LjE4OCAzNTMuOTA2IDI0NS41MzFMMzcyLjAzMSAyNTcuNjI1QzM3OS4wMzEgMjYyLjM0NCAzODguMDYyIDI2Mi45MDYgMzk1LjU2MiAyNTkuMTU2TDQxMS4wOTQgMjUxLjQwNkM0MTkuMDYyIDI0Ny40MDYgNDI0IDIzOS4zNDQgNDI0IDIzMC4zNzVWMjIzLjVDNDI0IDIxOS40MzggNDI3LjQzOCAyMTYgNDMxLjUgMjE2SDQ0MS42ODhDNDQ2LjA5NCAyMTYgNDQ5LjY4NyAyMTIuNDA2IDQ0OS42ODcgMjA4UzQ0Ni4wOTQgMjAwIDQ0MS42ODggMjAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EarthAfrica(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.418 16 256C16 411.049 147.941 496 256 496C361.072 496 496 412.454 496 256C496 123.418 388.539 16 256 16ZM256 480C158.193 480 32 402.219 32 256C32 132.484 132.484 32 256 32S480 132.484 480 256C480 400.906 356.587 480 256 480ZM441.688 200H431.5C418.531 200 408 210.531 408 223.5V230.375C408 233.25 406.438 235.844 403.938 237.094L388.375 244.875C386.094 246.031 383.219 245.906 380.938 244.344L362.719 232.188C356.531 228.094 348.938 227.094 342.281 229.531L339.656 230.375C332.75 232.625 327.375 237.875 324.938 244.781C322.438 251.813 323.344 259.406 327.469 265.688L340.781 285.531C345.094 292.094 352.406 296 360.281 296H368.531C372.656 296 376.031 299.375 376.031 303.5V314.875C376.031 316.5 375.531 317.969 374.469 319.344L355.875 344.25C353.781 346.969 352.281 350.25 351.438 354.062L347.25 376.875C346.938 378.469 346.094 379.937 344.875 381.094C334.969 390.094 326.156 400.406 318.625 411.687L305.531 431.25C305.125 431.844 304.094 432.625 303 433.469L302.562 433.812C295.312 435.687 288.125 437.125 281.125 438.125C276.906 436.25 273.562 433.094 271.531 429.062C266.625 419.25 264.031 408.281 264.031 397.375V367.5C264.031 354.531 253.5 344 240.531 344H214.625C202.375 344 190.344 339.031 181.687 330.375C172.969 321.625 168 309.594 168 297.375V283.25C168 268.656 174.969 254.75 186.719 246L214.187 225.312C227.656 215.281 247.906 212.875 263.969 220.906L278.625 228.219C284.031 231.031 290.531 231.531 296.594 229.594L343.969 213.812C353.594 210.562 360.062 201.594 360.062 191.5C360.062 178.531 349.531 168 336.562 168H326.375C324.406 168 322.562 167.219 321.187 165.875L314.219 158.813C309.844 154.469 303.781 152 297.562 152H207.469C203.406 152 199.969 148.562 199.969 144.5V140.125C199.969 136.625 202.312 133.594 205.594 132.781L220.312 129.219C226.156 127.687 231.031 124.125 233.969 119.469L242.031 107.406C243.469 105.312 245.875 104 248.281 104H272.5C285.469 104 296 93.469 296 80.5V66.875C296 62.469 292.406 58.875 288 58.875S280 62.469 280 66.875V80.5C280 84.625 276.625 88 272.5 88H248.281C240.531 88 233.281 91.875 228.781 98.406L220.531 110.75C219.625 112.188 218.094 113.25 216.375 113.719L201.75 117.25C191.281 119.906 183.969 129.312 183.969 140.125V144.5C183.969 157.469 194.5 168 207.469 168H297.562C299.594 168 301.562 168.812 302.906 170.125L309.844 177.156C314.25 181.562 320.125 184 326.375 184H336.562C340.687 184 344.062 187.375 344.062 191.5C344.062 194.688 341.906 197.625 338.875 198.656L291.594 214.375C289.625 214.969 287.562 214.844 285.875 213.969L271.094 206.594C251.5 196.812 224.031 198 204.594 212.5L177.125 233.219C161.406 244.906 152 263.625 152 283.25V297.375C152 314.031 158.5 329.75 170.344 341.656C182.031 353.312 198.188 360 214.625 360H240.531C244.656 360 248.031 363.375 248.031 367.5V397.375C248.031 410.75 251.219 424.188 257.219 436.188C261.375 444.5 268.594 450.781 277.5 453.875L279.281 454.469L281.125 454.25C290 453.125 299.125 451.313 308.281 448.844L312.656 446.219C314.594 444.75 317 442.906 318.875 440.063L331.938 420.563C338.75 410.344 346.719 401.031 355.719 392.844C359.5 389.281 362 384.813 362.969 379.813L367.125 357.25C367.406 356 367.906 354.844 368.625 353.906L387.156 329.063C390.313 325.063 392.031 320.031 392.031 314.875V303.5C392.031 290.531 381.5 280 368.531 280H360.281C357.813 280 355.438 278.75 354.094 276.688L340.813 256.875C339.5 254.844 339.188 252.375 340 250.094C340.469 248.844 341.656 246.562 344.625 245.594L347.438 244.656C349.625 243.906 351.906 244.188 353.906 245.531L372.031 257.625C379.031 262.344 388.062 262.906 395.562 259.156L411.094 251.406C419.062 247.406 424 239.344 424 230.375V223.5C424 219.438 427.438 216 431.5 216H441.688C446.094 216 449.687 212.406 449.687 208S446.094 200 441.688 200Z" />
        </Icon>
    </>
}