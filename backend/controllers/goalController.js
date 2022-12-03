// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}

// @desc    Set goals
// @route   POST   /api/goals
// @access  Private
const setGoal = (req, res) => {
  console.log(req.body)
}

// @desc    Update goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc    Delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
