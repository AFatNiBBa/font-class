
import { Icon } from "../../index";

/**
 * A component that renders the `swords` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=light swords}
 * @preview ![swords](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIuNTQxIDE0OC43MzhMNDE1LjMzNyA0NS45MjZMNDc2LjQ1MyAzNS41NTFMNDY2LjA3OSA5Ni42NzZMMzYzLjI4MyAxOTkuNDg3QzM1Ny4wMzcgMjA1LjczMyAzNTcuMDM3IDIxNS44NjYgMzYzLjI4MyAyMjIuMTEyQzM2OS41MjkgMjI4LjM1OCAzNzkuNjU4IDIyOC4zNTggMzg1LjkwNCAyMjIuMTEyTDQ5NS45NSAxMTIuMDVMNTExLjgyMyAxOC4zMDFDNTEzLjQ0OCA3LjA1MSA1MDMuNTc0IC0xLjE5OCA0OTMuNyAwLjE3N0wzOTkuOTY0IDE2LjA1MUwyODkuOTIgMTI2LjExM0MyODMuNjcyIDEzMi4zNTkgMjgzLjY3MiAxNDIuNDkyIDI4OS45MiAxNDguNzM4QzI5Ni4xNjYgMTU0Ljk4NCAzMDYuMjkzIDE1NC45ODQgMzEyLjU0MSAxNDguNzM4Wk0yODguNTY2IDM2Mi4wMDVDMjk0LjgxMiAzNTUuNzU5IDI5NC44MTIgMzQ1LjYzIDI4OC41NjYgMzM5LjM4TDQ1Ljg5MyA5Ni42NzZMMzUuNTIgMzUuNTUxTDk2LjYzNSA0NS45MjZMMzM5LjMwOCAyODguNjMxQzM0NS41NTQgMjk0Ljg4MSAzNTUuNjgzIDI5NC44ODEgMzYxLjkyOSAyODguNjMxQzM2OC4xNzUgMjgyLjM4NSAzNjguMTc1IDI3Mi4yNTYgMzYxLjkyOSAyNjYuMDA2TDExMi4wMDggMTYuMDUxTDE4LjI3MiAwLjE3NkM3LjAyNCAtMS40NDggLTEuMjI0IDguNDI2IDAuMTUxIDE4LjMwMUwxNi4wMjIgMTEyLjA1TDI2NS45NDMgMzYyLjAwNUMyNzIuMTkxIDM2OC4yNTUgMjgyLjMxOCAzNjguMjU1IDI4OC41NjYgMzYyLjAwNVpNMjExLjMzNCA0MDMuMjg2TDIxOS4zMTMgMzk1LjMxQzIyNS41NjMgMzg5LjA2IDIyNS41NjMgMzc4LjkzNSAyMTkuMzEzIDM3Mi42ODVDMjEzLjA2MyAzNjYuNDM1IDIwMi45MzggMzY2LjQzNSAxOTYuNjg4IDM3Mi42ODVMMTg4LjcwOSAzODAuNjYxTDEzMS4zMzQgMzIzLjI4N0wxMzkuMzEzIDMxNS4zMUMxNDUuNTYzIDMwOS4wNiAxNDUuNTYzIDI5OC45MzYgMTM5LjMxMyAyOTIuNjg2QzEzMy4wNjMgMjg2LjQzNiAxMjIuOTM4IDI4Ni40MzYgMTE2LjY4OCAyOTIuNjg2TDEwOC43MDkgMzAwLjY2Mkw4NC42OTYgMjc2LjY1MUM4MS41OTQgMjczLjU0OSA3Ny41MyAyNzEuOTk4IDczLjQ2NSAyNzEuOTk4QzY5LjM5MSAyNzEuOTk4IDY1LjMxNyAyNzMuNTU3IDYyLjIxMyAyNzYuNjdMMjcuNzM1IDMxMS4yNzVDMjIuMzk5IDMxNi42MTEgMjEuNTMgMzI1LjA0OSAyNS43NDkgMzMxLjI1Mkw2MC4xMjYgMzg4LjMzN0w5LjMwNyA0MzkuMjE2Qy0zLjA4OSA0NTEuNjEgLTMuMTA1IDQ3MS43MTEgOS4yNzQgNDg0LjEyNUwyNy43OSA1MDIuNjk1QzMzLjk3MSA1MDguODk4IDQyLjEzIDUxMiA1MC4yODYgNTEyQzU4LjQyNCA1MTIgNjYuNTY1IDUwOC45MSA3Mi43NDUgNTAyLjczMUwxMjMuNTM5IDQ1MS44NzZMMTgwLjc1IDQ4Ni4yNUMxODMuMzkxIDQ4OC4wNDcgMTg2LjQzNiA0ODguOTE4IDE4OS40NzMgNDg4LjkxOEMxOTMuNTc0IDQ4OC45MTggMTk3LjY2NCA0ODcuMzI4IDIwMC43MzEgNDg0LjI2MkwyMzUuMzU0IDQ0OS43NjZDMjQxLjU0MSA0NDMuNTk4IDI0MS41NTEgNDMzLjUwMSAyMzUuMzczIDQyNy4zMjVMMjExLjMzNCA0MDMuMjg2Wk0xODcuMDYxIDQ1Mi43MTFMMTE4LjU3OSA0MTEuNTYzTDUwLjQ1IDQ4MC4xMDJMMzEuOTQ4IDQ2MS44MjlMMTAwLjQ0IDM5My4yNTVMNTkuMjk5IDMyNC45MzVMNzMuNDg1IDMxMC42OTNMMjAxLjMwOSA0MzguNTEyTDE4Ny4wNjEgNDUyLjcxMVpNNTAyLjczIDQzOS4yNTVMNDUxLjg3NCAzODguNDU4TDQ4Ni4yNDkgMzMxLjI0OEM0ODguMDQ2IDMyOC42MDcgNDg4LjkxNyAzMjUuNTY0IDQ4OC45MTcgMzIyLjUyNUM0ODguOTE3IDMxOC40MjQgNDg3LjMyNyAzMTQuMzM0IDQ4NC4yNjEgMzExLjI3MUw0NDkuNzY1IDI3Ni42NDdDNDQzLjU5NyAyNzAuNDU5IDQzMy41IDI3MC40NTEgNDI3LjMyNCAyNzYuNjIzTDI3Ni42NDggNDI3LjMwMkMyNzMuNTQ3IDQzMC40MDMgMjcxLjk5NiA0MzQuNDY5IDI3MS45OTYgNDM4LjUzNkMyNzEuOTk2IDQ0Mi42MDYgMjczLjU1NSA0NDYuNjggMjc2LjY2OCA0NDkuNzg2TDMxMS4yNzMgNDg0LjI2MkMzMTYuNjA5IDQ4OS41OTggMzI1LjA0NyA0OTAuNDY5IDMzMS4yNSA0ODYuMjQ2TDM4OC4zMzYgNDUxLjg3Mkw0MzkuMjE0IDUwMi42OTJDNDUxLjYwOSA1MTUuMDkgNDcxLjcxIDUxNS4xMDIgNDg0LjEyNCA1MDIuNzIzTDUwMi42OTUgNDg0LjIwN0M1MDguODk4IDQ3OC4wMjggNTExLjk5OSA0NjkuODcxIDUxMS45OTkgNDYxLjcxNUM1MTEuOTk5IDQ1My41NzUgNTA4LjkwOSA0NDUuNDM0IDUwMi43MyA0MzkuMjU1Wk00NjEuODI4IDQ4MC4wNTFMMzkzLjI1NCA0MTEuNTZMMzI0LjkzMyA0NTIuN0wzMTAuNjkxIDQzOC41MTJMNDM4LjUxMSAzMTAuNjkzTDQ1Mi43MSAzMjQuOTM5TDQxMS41NjIgMzkzLjQxOUw0ODAuMTAxIDQ2MS41NDdMNDYxLjgyOCA0ODAuMDUxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312.541 148.738L415.337 45.926L476.453 35.551L466.079 96.676L363.283 199.487C357.037 205.733 357.037 215.866 363.283 222.112C369.529 228.358 379.658 228.358 385.904 222.112L495.95 112.05L511.823 18.301C513.448 7.051 503.574 -1.198 493.7 0.177L399.964 16.051L289.92 126.113C283.672 132.359 283.672 142.492 289.92 148.738C296.166 154.984 306.293 154.984 312.541 148.738ZM288.566 362.005C294.812 355.759 294.812 345.63 288.566 339.38L45.893 96.676L35.52 35.551L96.635 45.926L339.308 288.631C345.554 294.881 355.683 294.881 361.929 288.631C368.175 282.385 368.175 272.256 361.929 266.006L112.008 16.051L18.272 0.176C7.024 -1.448 -1.224 8.426 0.151 18.301L16.022 112.05L265.943 362.005C272.191 368.255 282.318 368.255 288.566 362.005ZM211.334 403.286L219.313 395.31C225.563 389.06 225.563 378.935 219.313 372.685C213.063 366.435 202.938 366.435 196.688 372.685L188.709 380.661L131.334 323.287L139.313 315.31C145.563 309.06 145.563 298.936 139.313 292.686C133.063 286.436 122.938 286.436 116.688 292.686L108.709 300.662L84.696 276.651C81.594 273.549 77.53 271.998 73.465 271.998C69.391 271.998 65.317 273.557 62.213 276.67L27.735 311.275C22.399 316.611 21.53 325.049 25.749 331.252L60.126 388.337L9.307 439.216C-3.089 451.61 -3.105 471.711 9.274 484.125L27.79 502.695C33.971 508.898 42.13 512 50.286 512C58.424 512 66.565 508.91 72.745 502.731L123.539 451.876L180.75 486.25C183.391 488.047 186.436 488.918 189.473 488.918C193.574 488.918 197.664 487.328 200.731 484.262L235.354 449.766C241.541 443.598 241.551 433.501 235.373 427.325L211.334 403.286ZM187.061 452.711L118.579 411.563L50.45 480.102L31.948 461.829L100.44 393.255L59.299 324.935L73.485 310.693L201.309 438.512L187.061 452.711ZM502.73 439.255L451.874 388.458L486.249 331.248C488.046 328.607 488.917 325.564 488.917 322.525C488.917 318.424 487.327 314.334 484.261 311.271L449.765 276.647C443.597 270.459 433.5 270.451 427.324 276.623L276.648 427.302C273.547 430.403 271.996 434.469 271.996 438.536C271.996 442.606 273.555 446.68 276.668 449.786L311.273 484.262C316.609 489.598 325.047 490.469 331.25 486.246L388.336 451.872L439.214 502.692C451.609 515.09 471.71 515.102 484.124 502.723L502.695 484.207C508.898 478.028 511.999 469.871 511.999 461.715C511.999 453.575 508.909 445.434 502.73 439.255ZM461.828 480.051L393.254 411.56L324.933 452.7L310.691 438.512L438.511 310.693L452.71 324.939L411.562 393.419L480.101 461.547L461.828 480.051Z" />
    </Icon>
);

export default Swords;