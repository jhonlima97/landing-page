export default (req, res) => {
    res.status(404).json({ error: 'Data not found or endpoint does not exist' });
  };
  