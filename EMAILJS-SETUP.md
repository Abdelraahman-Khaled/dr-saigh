# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to handle contact form submissions.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
4. Follow the authentication steps for your chosen provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content

**Subject:**
```
رسالة جديدة من موقع الدكتور الصائغ - {{subject}}
```

**Body:**
```
مرحباً،

لقد تلقيت رسالة جديدة من موقع الدكتور الصائغ:

الاسم: {{name}}
البريد الإلكتروني: {{email}}
رقم الهاتف: {{phone}}
الموضوع: {{subject}}

الرسالة:
{{message}}

---
تم إرسال هذه الرسالة من نموذج الاتصال في موقع aalsaigh.com
```

4. **Important:** Make sure the template variables match your form field names:
   - `{{name}}` - matches `name="name"`
   - `{{email}}` - matches `name="email"`
   - `{{phone}}` - matches `name="phone"`
   - `{{subject}}` - matches `name="subject"`
   - `{{message}}` - matches `name="message"`

5. Click **Save** and **copy the Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open your `.env` file (create one if it doesn't exist)
2. Add the following variables with your actual values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Xy9Z_aBcDeFgHiJkLmNoPqRsTu
```

## Step 6: Install Dependencies

Run the following command to install the EmailJS package:

```bash
npm install
```

## Step 7: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out the form with test data
4. Click **إرسال الرسالة** (Send Message)
5. Check your email inbox for the test message

## Troubleshooting

### Issue: "EmailJS configuration is missing"

**Solution:** Make sure your `.env` file has all three required variables and they start with `NEXT_PUBLIC_`

### Issue: Email not received

**Possible causes:**
1. Check your spam/junk folder
2. Verify the Service ID, Template ID, and Public Key are correct
3. Make sure your email service is properly connected in EmailJS dashboard
4. Check the browser console for error messages

### Issue: CORS errors

**Solution:** EmailJS should work out of the box. If you see CORS errors, make sure you're using the correct Public Key (not the Private Key)

### Issue: Template variables not showing data

**Solution:** Ensure the template variable names (e.g., `{{name}}`) exactly match the form field `name` attributes

## Email Service Limits

### Free Plan:
- 200 emails per month
- 2 email templates
- 1 email service

### Paid Plans:
- Higher email limits
- More templates and services
- Priority support

For production use with high traffic, consider upgrading to a paid plan.

## Security Notes

1. **Never commit `.env` file to Git** - it's already in `.gitignore`
2. Use the **Public Key** (safe to expose in frontend)
3. Keep your **Private Key** secret (not used in this implementation)
4. EmailJS automatically prevents spam with rate limiting

## Advanced Configuration

### Custom Reply-To Email

In your EmailJS template, you can set the reply-to address to the user's email:

1. In the template editor, click **Settings**
2. Set **Reply To** field to: `{{email}}`
3. Now when you reply to the email, it will go directly to the user

### Auto-Reply to User

Create a second template to send a confirmation email to the user:

1. Create a new template with subject: "شكراً لتواصلك مع الدكتور الصائغ"
2. In your code, send two emails - one to you, one to the user

### Email Notifications

You can set up multiple recipients in EmailJS:

1. Go to your Email Service settings
2. Add multiple email addresses separated by commas
3. All addresses will receive the form submissions

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

## Next Steps

After setting up EmailJS:

1. ✅ Test the form thoroughly
2. ✅ Set up email notifications on your phone
3. ✅ Create email templates for different form types
4. ✅ Monitor your monthly email usage
5. ✅ Consider upgrading if you exceed free tier limits
