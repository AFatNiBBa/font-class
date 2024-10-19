
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-gear` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-gear?s=solid users-gear}
 * @preview ![users-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk0xMjggMTYwQzE3Mi4xODQgMTYwIDIwOCAxMjQuMTgyIDIwOCA4MFMxNzIuMTg0IDAgMTI4IDBDODMuODIgMCA0OCAzNS44MTggNDggODBTODMuODIgMTYwIDEyOCAxNjBaTTMxOS44NTkgMzIwQzM3Ny4yNzMgMzIwIDQyMy44MTQgMjczLjQzNiA0MjMuODE0IDIxNkM0MjMuODE0IDE1OC41NjIgMzc3LjI3MyAxMTIgMzE5Ljg1OSAxMTJDMjYyLjQ1MSAxMTIgMjE1LjkwNCAxNTguNTYyIDIxNS45MDQgMjE2QzIxNS45MDQgMjczLjQzNiAyNjIuNDUxIDMyMCAzMTkuODU5IDMyMFpNMzY4IDQwMEMzNjggMzgzLjMxMiAzNzEuMzk4IDM2Ny41NDEgMzc2LjYxOSAzNTIuNjM3QzM3NC4zNCAzNTIuNTM1IDM3Mi4xOTMgMzUyIDM2OS44ODcgMzUySDI3MC4xMTNDMTkxLjYzMSAzNTIgMTI4IDQxMS42OTMgMTI4IDQ4NS4zMzJDMTI4IDUwMC4wNTkgMTQwLjcyNyA1MTIgMTU2LjQyMiA1MTJINDIyLjUxQzM4OS41MzUgNDg1LjYxMSAzNjggNDQ1LjUxOCAzNjggNDAwWk0xODMuOTA2IDIxNkMxODMuOTA2IDIxMC41NTEgMTg0Ljg4OSAyMDUuMzcxIDE4NS41MTYgMjAwLjA4OEMxNzQuNjEzIDE5NC45NjcgMTYyLjYxMyAxOTIgMTQ5LjkyIDE5Mkg4OC4wOEMzOS40MzggMTkyIDAgMjMzLjc4NSAwIDI4NS4zMzJDMCAyOTUuNjQxIDcuODg3IDMwNCAxNy42MTUgMzA0SDIxNy4wN0MxOTYuNjg4IDI4MC4yMTEgMTgzLjkwNiAyNDkuNzE1IDE4My45MDYgMjE2Wk01NTEuOTIgMTkySDQ5MC4wOEM0NzcuMjc5IDE5MiA0NjUuMTk1IDE5NS4wMzcgNDU0LjIyMSAyMDAuMjRDNDU0LjgzNCAyMDUuNDc1IDQ1NS44MTQgMjEwLjYwNCA0NTUuODE0IDIxNkM0NTUuODE0IDIzNy40NzEgNDUwLjE4OSAyNTcuMzg1IDQ0MS4xNiAyNzUuMzQ0QzQ2Mi4xNTYgMjYzLjM4MSA0ODYuMTA3IDI1NiA1MTIgMjU2QzU1NC40OCAyNTYgNTkyLjI3MSAyNzQuNzQgNjE4LjYyOSAzMDRINjIyLjM4NUM2MzIuMTEzIDMwNCA2NDAgMjk1LjY0MSA2NDAgMjg1LjMzMkM2NDAgMjMzLjc4NSA2MDAuNTY2IDE5MiA1NTEuOTIgMTkyWk02MTguOTY5IDM2Ni42ODhDNjEzLjk0MyAzNTAuNjgyIDYwNS4zODMgMzM2LjA3MiA1OTQuMjE3IDMyMy45NzdDNTkyLjU0MyAzMjIuMTE1IDU4OS43NSAzMjEuNjUgNTg3LjUxOCAzMjIuOTUzTDU2OC4zNSAzMzQuMDI1QzU2MC4yNTQgMzI3LjEzOSA1NTAuOTQ3IDMyMS43NDQgNTQwLjg5OCAzMTguMjA3VjI5NS45NjlDNTQwLjg5OCAyOTMuNDU1IDUzOS4wMzcgMjkxLjIyMyA1MzYuNjE3IDI5MC43NTZDNTIwLjA1NyAyODcuMDMzIDUwMy4xMTkgMjg3LjEyNyA0ODcuMzAxIDI5MC43NTZDNDg0Ljg4MyAyOTEuMjIzIDQ4My4xMTMgMjkzLjQ1NSA0ODMuMTEzIDI5NS45NjlWMzE4LjIwN0M0NzMuMDY0IDMyMS43NDQgNDYzLjc1OCAzMjcuMTM5IDQ1NS42NjQgMzM0LjAyNUw0MzYuNCAzMjIuOTUzQzQzNC4yNjIgMzIxLjY1IDQzMS40NjkgMzIyLjExNSA0MjkuNzAzIDMyMy45NzdDNDE4LjUzNSAzMzYuMDcyIDQwOS45NzUgMzUwLjY4MiA0MDUuMDQzIDM2Ni42ODdDNDA0LjI5OSAzNjkuMTk5IDQwNS4zMjIgMzcxLjgwNSA0MDcuNDYzIDM3My4wMTRMNDI2LjYzMSAzODQuMTgyQzQyNC43NzEgMzk0LjYwMiA0MjQuNzcxIDQwNS4zOTYgNDI2LjYzMSA0MTUuODE4TDQwNy40NjMgNDI2Ljk4NEM0MDUuMjI5IDQyOC4xOTMgNDA0LjI5OSA0MzAuODAxIDQwNS4wNDMgNDMzLjMxMkM0MDkuOTc1IDQ0OS4zMTggNDE4LjUzNSA0NjMuODMyIDQyOS43MDMgNDc2LjAyMUM0MzEuNDY5IDQ3Ny44ODUgNDM0LjE3IDQ3OC4zNSA0MzYuNCA0NzcuMDQ3TDQ1NS42NjQgNDY1Ljk3M0M0NjMuNzU4IDQ3Mi44NTkgNDczLjA2NCA0NzguMjU2IDQ4My4xMTMgNDgxLjc5MVY1MDQuMDMxQzQ4My4xMTMgNTA2LjU0NSA0ODQuODgzIDUwOC43NzcgNDg3LjMwMSA1MDkuMjQyQzUwMy45NTcgNTEyLjk2NSA1MjAuODAxIDUxMi44NzEgNTM2LjYxNyA1MDkuMjQyQzUzOS4wMzcgNTA4Ljc3NyA1NDAuODk4IDUwNi41NDUgNTQwLjg5OCA1MDQuMDMxVjQ4MS43OTFDNTUwLjk0NyA0NzguMjU2IDU2MC4yNTQgNDcyLjg1OSA1NjguMzUgNDY1Ljk3M0w1ODcuNTE4IDQ3Ny4wNDdDNTg5LjY1OCA0NzguMzUgNTkyLjU0MyA0NzcuODg1IDU5NC4yMTcgNDc2LjAyMUM2MDUuMzgzIDQ2My45MjYgNjEzLjk0MyA0NDkuMzE4IDYxOC45NjkgNDMzLjMxMkM2MTkuNzEzIDQzMC44MDEgNjE4LjY5MSA0MjguMTkzIDYxNi40NTcgNDI2Ljk4NEw1OTcuMjg5IDQxNS44MThDNTk5LjI0MiA0MDUuMzk2IDU5OS4yNDIgMzk0LjYwMiA1OTcuMjg5IDM4NC4xODJMNjE2LjQ1NyAzNzMuMDE0QzYxOC42OTEgMzcxLjgwNSA2MTkuNzEzIDM2OS4xOTkgNjE4Ljk2OSAzNjYuNjg4Wk01MTIgNDMyQzQ5NC4zMjYgNDMyIDQ4MCA0MTcuNjcyIDQ4MCA0MDBDNDgwIDM4Mi4zMjYgNDk0LjMyNiAzNjggNTEyIDM2OFM1NDQgMzgyLjMyNiA1NDQgNDAwQzU0NCA0MTcuNjcyIDUyOS42NzQgNDMyIDUxMiA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UsersGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM368 400C368 383.312 371.398 367.541 376.619 352.637C374.34 352.535 372.193 352 369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H422.51C389.535 485.611 368 445.518 368 400ZM183.906 216C183.906 210.551 184.889 205.371 185.516 200.088C174.613 194.967 162.613 192 149.92 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C196.688 280.211 183.906 249.715 183.906 216ZM551.92 192H490.08C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 237.471 450.189 257.385 441.16 275.344C462.156 263.381 486.107 256 512 256C554.48 256 592.271 274.74 618.629 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192ZM618.969 366.688C613.943 350.682 605.383 336.072 594.217 323.977C592.543 322.115 589.75 321.65 587.518 322.953L568.35 334.025C560.254 327.139 550.947 321.744 540.898 318.207V295.969C540.898 293.455 539.037 291.223 536.617 290.756C520.057 287.033 503.119 287.127 487.301 290.756C484.883 291.223 483.113 293.455 483.113 295.969V318.207C473.064 321.744 463.758 327.139 455.664 334.025L436.4 322.953C434.262 321.65 431.469 322.115 429.703 323.977C418.535 336.072 409.975 350.682 405.043 366.687C404.299 369.199 405.322 371.805 407.463 373.014L426.631 384.182C424.771 394.602 424.771 405.396 426.631 415.818L407.463 426.984C405.229 428.193 404.299 430.801 405.043 433.312C409.975 449.318 418.535 463.832 429.703 476.021C431.469 477.885 434.17 478.35 436.4 477.047L455.664 465.973C463.758 472.859 473.064 478.256 483.113 481.791V504.031C483.113 506.545 484.883 508.777 487.301 509.242C503.957 512.965 520.801 512.871 536.617 509.242C539.037 508.777 540.898 506.545 540.898 504.031V481.791C550.947 478.256 560.254 472.859 568.35 465.973L587.518 477.047C589.658 478.35 592.543 477.885 594.217 476.021C605.383 463.926 613.943 449.318 618.969 433.312C619.713 430.801 618.691 428.193 616.457 426.984L597.289 415.818C599.242 405.396 599.242 394.602 597.289 384.182L616.457 373.014C618.691 371.805 619.713 369.199 618.969 366.688ZM512 432C494.326 432 480 417.672 480 400C480 382.326 494.326 368 512 368S544 382.326 544 400C544 417.672 529.674 432 512 432Z" />
        </Icon>
    </>
}