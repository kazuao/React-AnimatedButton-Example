struct Model {
  var initial: bool
  var animate: bool
  var exit: bool
}

class View {
  let models: [Model] = [
    .init(initial: true, animate: true, exit: true),
    .init(initial: true, animate: true, exit: true),
    .init(initial: true, animate: true, exit: true),
    .init(initial: true, animate: true, exit: true),
    .init(initial: true, animate: true, exit: true),
  ]
}
