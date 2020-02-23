import User from '../models/User';
import Notification from '../schemas/Notificatiion';

class NotificationController {
  async index(req, res) {
    // Check if provider_id is a provider
    const checkIsProvider = await User.findOne({
      where: { id: 18, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: 18,
    })
      .sort('createdAt')
      .limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();
