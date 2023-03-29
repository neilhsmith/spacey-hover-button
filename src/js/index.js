;(function () {
  const containerEles = document.getElementsByClassName("stars")
  for (const containerEle of containerEles) {
    if (!containerEle.parentElement.classList.contains("space-btn")) continue

    const { clientHeight, clientWidth } = containerEle

    const particleCount = containerEle.dataset.count ?? 40
    for (let i = 0; i < particleCount; i++) {
      const pathRadius = random(clientWidth / 10, clientWidth / 2)
      const offset = pathRadius / 2

      const pathEle = document.createElement("div")
      pathEle.className = `path`
      pathEle.style.rotate = `${random(0, 360)}deg`
      pathEle.style.animationDirection = random(0, 1) ? "normal" : "reverse"
      pathEle.style.animationDuration = `${random(8, 50)}s`
      pathEle.style.animationDelay = `-${random(0, 1)}s`
      pathEle.style.top = `${random(-1 * offset, clientHeight - offset)}px`
      pathEle.style.left = `${random(-1 * offset, clientWidth - offset)}px`
      pathEle.style.width = `${pathRadius}px`
      pathEle.style.height = `${pathRadius}px`
      containerEle.appendChild(pathEle)

      const starSize = random(4, 22)
      const imgEle = new Image(starSize, starSize)
      imgEle.className = "star"
      imgEle.style.opacity = Math.random()
      if (!random(0, 2)) {
        pathEle.style.animationDirection = random(0, 1) ? "normal" : "reverse"
        imgEle.style.animationDuration = `${random(5, 20)}s`
        imgEle.style.animationDelay = `-${random(0, 1)}s`
      }
      imgEle.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDUwMyA0NTAzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgoJCQkJCTxnIHRyYW5zZm9ybT0ibWF0cml4KDQuMTY2NjcsMCwwLDQuMTY2NjcsMS4wMTQwMiwxLjAxNDAyKSI+CgkJCQkJCQk8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ5NTc5LDAsMCwxLjQ5NTc5LC0zODUuNzUzLC0zNzcuNzczKSI+CgkJCQkJCQkJCTxwYXRoIGQ9Ik02MTguOTA2LDI1Mi4zOTVMNzE2LjQ1Niw1MTYuMDJMOTgwLjA4Miw2MTMuNTdMNzE2LjQ1Niw3MTEuMTIxTDYxOC45MDYsOTc0Ljc0Nkw1MjEuMzU2LDcxMS4xMjFMMjU3LjczLDYxMy41N0w1MjEuMzU2LDUxNi4wMkw2MTguOTA2LDI1Mi4zOTVaIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4KCQkJCQkJCTwvZz4KCQkJCQk8L2c+CgkJCTwvc3ZnPg=="
      pathEle.appendChild(imgEle)
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
})()
