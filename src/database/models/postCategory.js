const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPosts',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
    }
  },{
    timestamps: false
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'postId', as: 'categories' });
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'categoryId', as: 'posts' })
  };
  return PostCategory;
}

module.exports = PostCategory;